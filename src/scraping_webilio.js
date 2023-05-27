import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export async function get_words_info(word) {
	const url = `https://ejje.weblio.jp/content/${word}`;

	const res = await fetch(url);
	const html = await res.text();
	const doc = new DOMParser().parseFromString(html, "text/html");

	const meaning = doc?.querySelector(".content-explanation.ej").firstChild
		.nodeValue.trim();

	let pronunciation = [];
	doc?.querySelectorAll(".phoneticEjjeDesc").forEach((elm) => {
		pronunciation.push(elm.firstChild.nodeValue.trim());
	});
	return { meaning, pronunciation };
}

export async function read_word_file(path) {

	const words = (await Deno.readTextFile(path)).split("\n").filter(Boolean);

	let words_info = [];

	for(let word of words) {
		const info = await get_words_info(word);
	
		let pronunciation = "";
		for(let pronunciations of info.pronunciation) {
			pronunciation += pronunciations + "  ";
		}

		words_info.push({
			word: word,
			pronunciation: pronunciation,
			meaning: info.meaning,
		});
	}
	return words_info;
}
let words_info = await read_word_file("./word.list");

//console.log(` ,Item,Pronunciation,Meaning`)
for(let i = 0; i < words_info.length; i++) {
	let word = words_info[i].word;
	let meaning = words_info[i].meaning;
	let pronunciation = words_info[i].pronunciation;

	console.log(`${i+1},${word},${pronunciation},${meaning}`);
}
