!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequire5efc;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},e.parcelRequire5efc=o);var a=o("bRtm6"),i=o("4s6iC"),t=o("ezoJw"),d=o("i4f7a"),l=o("8q5qW"),s=o("9VC5X"),c=o("cKDzr"),f=o("6JpON");i.refs.cards.addEventListener("click",(e=>(0,t.onCardClick)(e))),i.refs.mobileMenuToggler.addEventListener("click",(()=>(0,d.openModal)(i.refs.mobileMenu))),(0,a.currentPage)();const u=new(0,l.CardStorage);u.init(),i.state.cardStorage=u;const p=u.getCardIds().map(Number);console.log(p),(0,s.switchTheme)(),u.hasCardId&&(f.Loading.standard(),(0,c.markupFilmByIDArray)(p),f.Loading.remove())}();
//# sourceMappingURL=library.8d081183.js.map
