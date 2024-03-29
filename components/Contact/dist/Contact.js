'use client';
"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    return (React.createElement("main", { className: "relative py-28 bg-gray-900" },
        React.createElement("div", { className: "relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8" },
            React.createElement("div", { className: "max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0" },
                React.createElement("h3", { className: "text-cyan-400 font-semibold" }, "Contact"),
                React.createElement("p", { className: "text-white text-3xl font-semibold sm:text-4xl" }, "Get in touch"),
                React.createElement("p", { className: "text-gray-300" }, "We\u2019d love to hear from you! Please fill out the form bellow.")),
            React.createElement("div", { className: "mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl" },
                React.createElement("form", { onSubmit: function (e) { return e.preventDefault(); }, className: "space-y-5" },
                    React.createElement("div", null,
                        React.createElement("label", { className: "font-medium" }, "Full name"),
                        React.createElement("input", { type: "text", required: true, className: "w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" })),
                    React.createElement("div", null,
                        React.createElement("label", { className: "font-medium" }, "Email"),
                        React.createElement("input", { type: "email", required: true, className: "w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" })),
                    React.createElement("div", null,
                        React.createElement("label", { className: "font-medium" }, "Phone number"),
                        React.createElement("div", { className: "relative mt-2" },
                            React.createElement("div", { className: "absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2" },
                                React.createElement("select", { className: "text-sm bg-transparent outline-none rounded-lg h-full" },
                                    React.createElement("option", null, "US"),
                                    React.createElement("option", null, "ES"),
                                    React.createElement("option", null, "MR"))),
                            React.createElement("input", { type: "number", placeholder: "+1 (555) 000-000", required: true, className: "w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" }))),
                    React.createElement("div", null,
                        React.createElement("label", { className: "font-medium" }, "Message"),
                        React.createElement("textarea", { required: true, className: "w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" })),
                    React.createElement("button", { className: "w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150" }, "Submit")))),
        React.createElement("div", { className: 'absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]', style: { background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" } })));
});
