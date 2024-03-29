"use strict";
exports.__esModule = true;
var _components_1 = require("@components");
function Home() {
    return (React.createElement("div", null,
        React.createElement(_components_1.Hero, null),
        React.createElement(_components_1.Services, null),
        React.createElement(_components_1.Hero2, null),
        React.createElement(_components_1.Stats, null),
        React.createElement(_components_1.Team, null),
        React.createElement(_components_1.Technology, null),
        React.createElement(_components_1.Contact, null)));
}
exports["default"] = Home;
// import { fetchCars } from "@utils";
// import { HomeProps } from "@types";
// import { fuels, yearsOfProduction } from "@constants";
// import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
// export default async function Home({ searchParams }: HomeProps) {
//   const allCars = await fetchCars({
//     manufacturer: searchParams.manufacturer || "",
//     year: searchParams.year || 2022,
//     fuel: searchParams.fuel || "",
//     limit: searchParams.limit || 10,
//     model: searchParams.model || "",
//   });
//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
//   return (
//     <main className='overflow-hidden'>
//       <Hero />
//       <div className='mt-12 padding-x padding-y max-width' id='discover'>
//         <div className='home__text-container'>
//           <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
//           <p>Explore out cars you might like</p>
//         </div>
//         <div className='home__filters'>
//           <SearchBar />
//           <div className='home__filter-container'>
//             <CustomFilter title='fuel' options={fuels} />
//             <CustomFilter title='year' options={yearsOfProduction} />
//           </div>
//         </div>
//         {!isDataEmpty ? (
//           <section>
//             <div className='home__cars-wrapper'>
//               {allCars?.map((car) => (
//                 <CarCard car={car} />
//               ))}
//             </div>
//             <ShowMore
//               pageNumber={(searchParams.limit || 10) / 10}
//               isNext={(searchParams.limit || 10) > allCars.length}
//             />
//           </section>
//         ) : (
//           <div className='home__error-container'>
//             <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
