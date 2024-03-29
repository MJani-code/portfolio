"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
exports["default"] = (function () {
    var features = [
        {
            icon: React.createElement(lucide_react_1.AppWindowMac, { size: 24 }),
            title: "Weboldal készítés",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon: React.createElement(lucide_react_1.ShoppingBag, { size: 24 }),
            title: "Webshop fejlesztés",
            desc: "Ügyféligény szerint testreszabott egyedi fejlesztésű webshop"
        },
        {
            icon: React.createElement(lucide_react_1.Unplug, { size: 24 }),
            title: "Rendszerintegráció",
            desc: "Összekötjük a rendszeredet beszálítókkal, viszonteladókkal, hogy időt spórolj az adminisztrációval"
        },
        {
            icon: React.createElement(lucide_react_1.Workflow, { size: 24 }),
            title: "Ügyviteli rendszer",
            desc: "Folyamatok áttanulmányozása és megértése után lefejlesztjük neked a folyamatokat támogató rendszert, ahol csak azt kell adminisztrálni, amit valóban szükséges"
        },
        {
            icon: React.createElement(lucide_react_1.Server, { size: 24 }),
            title: "Üzemeltetés",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" })),
            title: "Flexible",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
    ];
    return (React.createElement("section", { className: "py-14" },
        React.createElement("div", { className: "max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8" },
            React.createElement("div", { className: "relative max-w-2xl mx-auto sm:text-center" },
                React.createElement("div", { className: "relative z-10" },
                    React.createElement("h3", { className: "text-gray-800 text-3xl font-semibold sm:text-4xl" }, "Szolg\u00E1ltat\u00E1saink"),
                    React.createElement("p", { className: "mt-3" }, "Az al\u00E1bbikban tudunk neked seg\u00EDts\u00E9gre lenni")),
                React.createElement("div", { className: "absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]", style: { background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" } })),
            React.createElement("div", { className: "relative mt-12" },
                React.createElement("ul", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3" }, features.map(function (item, idx) { return (React.createElement("li", { key: idx, className: "bg-white space-y-3 p-4 border rounded-lg" },
                    React.createElement("div", { className: "text-indigo-600 pb-3" }, item.icon),
                    React.createElement("h4", { className: "text-lg text-gray-800 font-semibold" }, item.title),
                    React.createElement("p", null, item.desc))); }))))));
});
