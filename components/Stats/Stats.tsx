export default () => {

    const stats = [
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
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 justify-between md:px-8 lg:flex">
                <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Ismerj meg minket!
                    </h3>
                    <p className="mt-3 max-w-xl mx-auto lg:mx-0">
                        Az eltérő területeken való szakértelmünk lehetővé teszi számunkra, hogy a projekt teljes spektrumát lefedjük, az előkészületektől kezdve a bevezetésig és az utánkövetésig. A Key Account Manager a kapcsolattartó, aki állandóan az ügyfél igényeit tartja szem előtt, és biztosítja, hogy minden szakaszban megfelelően reagáljunk az elvárásokra. A Business Analyst pedig az üzleti szempontokat hangsúlyozza, és gondoskodik arról, hogy a technikai megoldások összhangban legyenek az üzleti célokkal.
                    <br/><br/>
                        Ez az integrált megközelítés lehetővé teszi számunkra, hogy gyorsan reagáljunk az ügyfelek igényeire, és biztosítsuk, hogy a projekt minden szakasza összhangban legyen az eredeti elképzelésekkel. Ránk bízhatja projektjét az elejétől a végéig, és biztos lehet abban, hogy szakértelmünk és elkötelezettségünk által támogatva a legjobb eredményeket éri el.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center w-full px-4 py-6 sm:w-auto lg:py-4">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}