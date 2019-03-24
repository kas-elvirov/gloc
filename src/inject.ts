/**
 * https://github.com/artem-solovev/gloc
 *
 * Licensed GPL-2.0 © Artem Solovev
 */
import { log } from './utils';
import { APP_CLASSNAME, TRIES_DEFAULT, REPO_CLASS } from './constants';


/**
 * Accepted abbreviations
 * - LOC - lines of code
 */

let githubToken: string = null;

/**
 * Main
 */
(() => {
	chrome.storage.sync.get({ 'x-github-token': '' }, result => {
		if (result && result['x-github-token'] !== null) {
			githubToken = result['x-github-token'];
		}

		insertLocForRepo();

		insertLocForDir();
	});
})();

/**
 * PART 1.
 * Renders in DOM in front of the each of the acceptable file LOC
 */

/**
 * Renders total LOC into DOM
 */
function insertLocForRepo() {
	const reposMetaContent = document.getElementsByClassName(REPO_CLASS)[0];
	const userRepos = document.querySelectorAll('#user-repositories-list h3 a');
	const organisationRepos = document.querySelectorAll('.repo-list h3 a');
	const recommendedRepos = document.querySelectorAll(
		'#recommended-repositories-container h3 a'
	);

	// Add LOC to single repo
	if (reposMetaContent) {
		appendLoc(getRepoName(), reposMetaContent);
	}

	let repos: NodeListOf<Element> = null;

	if (userRepos.length) {
		repos = userRepos;
	} else if (organisationRepos.length) {
		repos = organisationRepos;
	} else if (recommendedRepos.length) {
		repos = recommendedRepos;
	}

	if (repos) {
		const links: Element[] = Array.prototype.slice.call(repos);

		links.map((elem) => {
			const link = elem.getAttribute('href');
			appendLoc(link, elem);
		});
	}
}

/**
 * Gets repo name from current location
 * @return {string}
 */
const getRepoName = () => {
	const repo = location.pathname;
	if (repo && typeof repo === 'string') {
		return repo.endsWith('/')
			? repo.slice(0, -1)
			: repo;
	} else {
		return '';
	}
};

/**
 * Appends LOC to ELEMENT
 * @param {string} repoName
 * @param {Element} element
 */
function appendLoc(repoName: string, element: Element) {
	getGloc(repoName, TRIES_DEFAULT)
		.then((lines: number) => (element.innerHTML += getBadgeWithLines(lines)))
		.catch((e: any) => log('e', e));
}

/**
 * Returns badge container for LOC with LOC
 * @param {number} lines - LOC
 * @return {html}
 */
function getBadgeWithLines(lines: number) {
	return (
		` <div class='box' style='font-size: 0; font-family: Verdana;'>
				<span
					style='background-color: #555555; color: #fff; padding: 2px 6px; font-size: 14px;'
				>
					${chrome.i18n.getMessage('lines')}
				</span>
				<span
					class='${APP_CLASSNAME}'
					style='background-color: #44CC11; color: #fff; padding: 2px 6px; font-size: 14px;'
				>
					${lines}
				</span>
			</div> `
	);
}

/**
 * Counts LOC
 * @param {string} repo - /user/repo
 * @param {number} tries
 * @return {promise}
 */
const getGloc = (repoName: string, tries: number): Promise<any> => {
	if (!repoName) {
		return Promise.reject(new Error('No repositories !'));
	}

	if (tries === 0) {
		return Promise.reject(
			new Error('Repo: ' + repoName + '; Too many requests to API !')
		);
	}

	const url = tokenizeUrl(setApiUrl(repoName));

	return fetch(url)
		.then(x => x.json())
		.then(x =>
			x.reduce((total: number, changes: number[]) => total + changes[1] + changes[2], 0)
		)
		.catch(err => getGloc(repoName, tries - 1));
};

/**
 * Setter for url
 * @param {string} repo - /user/repo
 * @return {string}
 */
function setApiUrl(repoName: string) {
	return `https://api.github.com/repos${repoName}/stats/code_frequency`;
}

/**
 * Adds token to URL
 * @param {string} url
 * @return {string}
 */
function tokenizeUrl(url: string) {
	if (githubToken !== null && typeof githubToken === 'string') {
		return `${url}?access_token=${githubToken}`;
	}
	log('e', 'Error by tokenizing URL');

	return '';
}

/**
 * PART 2.
 * Renders in DOM in front of the each of the acceptable file LOC
 */
const insertLocForDir = () => {
	/**
	 * File extensions which plugin counts
	 *
	 * https://www.file-extensions.org/filetype/extension/name/source-code-and-script-files
	 */
	const acceptableExtensions = [
		'as',
		'asm',
		'asp',
		'aspx',
		'bash',
		'bat',
		'c',
		'cbl',
		'cc',
		'cfc',
		'clj',
		'cs',
		'css',
		'cpp',
		'comp',
		'cso',
		'dart',
		'd',
		'do',
		'dpr',
		'el',
		'ejs',
		'f90',
		'frag',
		'gitignore',
		'geom',
		'glsl',
		'h',
		'hs',
		'hpp',
		'html',
		'haml',
		'hlsl',
		'java',
		'js',
		'json',
		'jsp',
		'jade',
		'jsx',
		'kt',
		'kts',
		'lisp',
		'lua',
		'less',
		'm',
		'md',
		'mk',
		'mm',
		'pas',
		'php',
		'pl',
		'prl',
		'pxd',
		'py',
		'pyx',
		'pyw',
		'r',
		'rb',
		's',
		'ss',
		'scala',
		'ser',
		'sh',
		'sql',
		'swift',
		'svg',
		'sass',
		'scss',
		'ts',
		'tmpl',
		'tpl',
		'tsx',
		'tese',
		'tesc',
		'vb',
		'vert',
		'ui',
		'win',
		'xml',
		'yaml',
		'yml'
	];

	// Get links for files in current directory (swith them into array)
	const nodeList = document.querySelectorAll('tbody .js-navigation-open');
	const fileLinks = Array.prototype.slice.call(nodeList);

	// object with LOCs for each file's extension in current dir { 'md': 000, 'txt': 001, ... }
	const locCollection: Record<string, number> = {};

	const DOM_APP_ID = 'Gloc-counter';

	/**
	 * Checks link's object
	 * @param {HTMLAnchorElement} link - <a> tag
	 * @return {boolean}
	 */
	const isAcceptableFile = (link: HTMLAnchorElement) => {
		const fileExt = getExtension(link);
		const hasTitle = link.title !== '';
		const hasProperType = typeof link.title === typeof 'str';
		const isAcceptableFile = acceptableExtensions.indexOf(fileExt) !== -1;

		return (hasTitle || hasProperType) && isAcceptableFile;
	};

	/**
	 * Retrieves file's extension
	 * @param {HTMLAnchorElement} link - <a> tag
	 * @return {string}
	 */
	const getExtension = (link: HTMLAnchorElement) => {
		const title = link.title;
		const fileExt = title.split('.');

		return fileExt[fileExt.length - 1];
	};

	/**
	 * Gets plain html file from the link
	 * @param {HTMLAnchorElement} link
	 * @param {function} parsePlainHTML
	 */
	const getHtmlFile = (
		link: HTMLAnchorElement,
		parsePlainHTML: (plainHTML: string, link: HTMLAnchorElement) => void
		) => {
		const xmlHttp = new XMLHttpRequest();

		xmlHttp.onreadystatechange = () => {
			if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
				parsePlainHTML(xmlHttp.responseText, link);
			}
		};

		xmlHttp.open('GET', link.href, true);
		xmlHttp.send(null);
	};

	/**
	 * Parses plain html file ( extracts LOC )
	 * @param {string} plainHTML
	 * @param {HTMLAnchorElement} link - <a> tag
	 */
	const parsePlainHTML = (plainHTML: string, link: HTMLAnchorElement) => {
		const rowLoc = plainHTML.match(/\d+ lines/g); // console.log( rowLoc ) --> 00 lines

		if (!rowLoc || rowLoc.length === 0) {
			log('w', 'Cannot parse file from ' + link);
			return;
		}

		const loc = Number(rowLoc[0].replace('lines', '')); // console.log( loc ) ==> 00

		addCurrentLoc(locCollection, getExtension(link), loc);

		renderLocByExtensions();

		renderLocForFile(link, loc);
	};

	/**
	 * Adds LOC value to collection of LOC by extensions
	 * @param {object} collection
	 * @param {string} fileExt
	 * @param {number} loc
	 */
	const addCurrentLoc = (
			collection: Record<string, number>,
			fileExt: string,
			loc: number
		) => {
		if (fileExt in collection) {
			collection[fileExt] += loc;
		} else {
			collection[fileExt] = loc;
		}
	};

	/**
	 * Renders LOC in DOM by file extensions
	 */
	const renderLocByExtensions = () => {
		const commitTease = document.getElementsByClassName('commit-tease')[0];
		let locDisplay = document.getElementById(DOM_APP_ID);

		if (!locDisplay) {
			locDisplay = document.createElement('div');
			locDisplay.id = DOM_APP_ID;
			commitTease.appendChild(locDisplay);
		}

		const locTitle = `<hr /><span class='user-mention'>${chrome.i18n.getMessage('totalDirLoc')}</span> `;

		locDisplay.innerHTML = locTitle + stringifyLocCollection(locCollection);
	};

	/**
	 * Converts object to string
	 * @param {object} collection
	 * @return {string}
	 */
	const stringifyLocCollection = (collection: Record<string, number>) => {
		const arr = [];

		let totalLoc = 0;

		for (const key in collection) {
			arr.push(key + ' - ' + String(collection[key]));
			totalLoc += collection[key];
			arr.sort();
		}

		return `
			${totalLoc}
			<br /> <span class='user-mention'>
				${chrome.i18n.getMessage('totalExtLoc')}
			</span><br /> &nbsp;${arr.join(',<br />&nbsp;')}`;

	};

	/**
	 * Renders in DOM LOC for current link
	 * @param {HTMLAnchorElement} link
	 * @param {number} loc
	 */
	const renderLocForFile = (link: HTMLAnchorElement, loc: number) => {
		// console.log( str ) --> .eslintrc.js 00 lines
		const str = `${link.title}<span style='color:#888'> ${loc} ${chrome.i18n.getMessage('lines')}</span>`;

		document.getElementById(link.id).innerHTML = str;
	};

	fileLinks
		.filter((link: HTMLAnchorElement) => {
			return isAcceptableFile(link);
		})
		.map((link: HTMLAnchorElement) => {
			getHtmlFile(link, parsePlainHTML);
		});
};
