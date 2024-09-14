

function Hero(){
  
        const countries = [
          {
            id: 1,
            name: "Wallis and Futuna",
            capital: "Mata-Utu",
            population: 11750,
            flag: "https://flagcdn.com/wf.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 2,
            name: "Iceland",
            capital: "Reykjavik",
            population: 366425,
            flag: "https://flagcdn.com/is.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 3,
            name: "Luxembourg",
            capital: "Luxembourg",
            population: 632275,
            flag: "https://flagcdn.com/lu.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 4,
            name: "Mali",
            capital: "Bamako",
            population: 20250834,
            flag: "https://flagcdn.com/ml.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 5,
            name: "Comoros",
            capital: "Moroni",
            population: 869595,
            flag: "https://flagcdn.com/km.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 6,
            name: "Australia",
            capital: "Canberra",
            population: 25687041,
            flag: "https://flagcdn.com/au.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 7,
            name: "Estonia",
            capital: "Tallinn",
            population: 1331057,
            flag: "https://flagcdn.com/ee.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 8,
            name: "Canada",
            capital: "Ottawa",
            population: 38005238,
            flag: "https://flagcdn.com/ca.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 9,
            name: "Belarus",
            capital: "Minsk",
            population: 9398861,
            flag: "https://flagcdn.com/by.svg",
            isLiked: false,
            isBasket: false
          },
          {
            id: 10,
            name: "Guyana",
            capital: "Georgetown",
            population: 786559,
            flag: "https://flagcdn.com/gy.svg",
            isLiked: false,
            isBasket: false
          }
        ]
        return (
       <main>
      <section class="py-5 shadow-md">
        <div class="container mx-auto 6-px">
          <div class="flex items-center justify-between">
            <input
              class="search-input p-3 rounded-[10px] border-[1px] w-[250px] border-slate-500"
              type="text"
              placeholder="Searching..."
            />
            <select
              class="country-select p-3 rounded-[10px] border-[1px] w-[250px] border-slate-500"
            >
              <option>All</option>
            </select>
          </div>
          <ul
            class="countries-list flex flex-wrap justify-between gap-3 mt-8"
          ></ul>
        </div>
        <ul className="flex flex-wrap justify-between gap-[8px]">
          {
           countries.map(item=>(
            <li className="w-[350px] m-2 p-4 rounded-md bg-blue-200 hover:bg-blue-300 transition duration-400 ease-in-out hover:scale-105">
              <img src={item.flag} alt="img" width={"100%"}/>
              <strong className="text-[35px] font-bold">{item.name}</strong>
              <p><strong>Population:</strong> {item.population}</p>
              <p><strong>Region:</strong> {item.name}</p>
              <p><strong>Capital:</strong> {item.capital}</p>
            </li>
           ))
          }
        </ul>
      </section>
    </main>
        );
      }

   

export default Hero