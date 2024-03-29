"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    var stats = [
        {
            data: "15",
            title: "Ügyfél"
        },
        {
            data: "10+",
            title: "Üzletben eltöltött évek"
        },
        {
            data: "4",
            title: "Munkatársak"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ];
    return (React.createElement("section", { className: "py-14" },
        React.createElement("div", { className: "max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 justify-between md:px-8 lg:flex" },
            React.createElement("div", { className: "max-w-2xl mx-auto text-center lg:text-left lg:mx-0" },
                React.createElement("h3", { className: "text-gray-800 text-3xl font-semibold sm:text-4xl" }, "Ismerj meg minket!"),
                React.createElement("p", { className: "mt-3 max-w-xl mx-auto lg:mx-0" },
                    "Az elt\u00E9r\u0151 ter\u00FCleteken val\u00F3 szak\u00E9rtelm\u00FCnk lehet\u0151v\u00E9 teszi sz\u00E1munkra, hogy a projekt teljes spektrum\u00E1t lefedj\u00FCk, az el\u0151k\u00E9sz\u00FCletekt\u0151l kezdve a bevezet\u00E9sig \u00E9s az ut\u00E1nk\u00F6vet\u00E9sig. A Key Account Manager a kapcsolattart\u00F3, aki \u00E1lland\u00F3an az \u00FCgyf\u00E9l ig\u00E9nyeit tartja szem el\u0151tt, \u00E9s biztos\u00EDtja, hogy minden szakaszban megfelel\u0151en reag\u00E1ljunk az elv\u00E1r\u00E1sokra. A Business Analyst pedig az \u00FCzleti szempontokat hangs\u00FAlyozza, \u00E9s gondoskodik arr\u00F3l, hogy a technikai megold\u00E1sok \u00F6sszhangban legyenek az \u00FCzleti c\u00E9lokkal.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Ez az integr\u00E1lt megk\u00F6zel\u00EDt\u00E9s lehet\u0151v\u00E9 teszi sz\u00E1munkra, hogy gyorsan reag\u00E1ljunk az \u00FCgyfelek ig\u00E9nyeire, \u00E9s biztos\u00EDtsuk, hogy a projekt minden szakasza \u00F6sszhangban legyen az eredeti elk\u00E9pzel\u00E9sekkel. R\u00E1nk b\u00EDzhatja projektj\u00E9t az elej\u00E9t\u0151l a v\u00E9g\u00E9ig, \u00E9s biztos lehet abban, hogy szak\u00E9rtelm\u00FCnk \u00E9s elk\u00F6telezetts\u00E9g\u00FCnk \u00E1ltal t\u00E1mogatva a legjobb eredm\u00E9nyeket \u00E9ri el.")),
            React.createElement("div", { className: "mt-12 lg:mt-0" },
                React.createElement("ul", { className: "flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2" }, stats.map(function (item, idx) { return (React.createElement("li", { key: idx, className: "text-center w-full px-4 py-6 sm:w-auto lg:py-4" },
                    React.createElement("h4", { className: "text-4xl text-indigo-600 font-semibold" }, item.data),
                    React.createElement("p", { className: "mt-3 font-medium" }, item.title))); }))))));
});
