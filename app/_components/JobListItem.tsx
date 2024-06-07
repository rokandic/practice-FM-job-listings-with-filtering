import Image from "next/image";
import IUserData from "./_types/IUSerData";
import userFilterItems from "./_functions/userFilterItems";

// single joblist item
interface JobListItemProps {
  data: IUserData;
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function JobListItem({
  data,
  filter,
  setFilter,
}: JobListItemProps) {
  // clicking on each tag name adds it to filter
  function handleFilterClick(
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    name: string,
  ) {
    if (!filter.includes(name)) {
      let newFilter = [...filter, name];
      setFilter(newFilter);
    }
  }

  // display only tags that are not already part of the global filter
  let filterItems = userFilterItems(data);
  let filterElements: JSX.Element[] = [];
  for (let i = 0; i < filterItems.length; i++) {
    if (!filter.includes(filterItems[i]))
      filterElements.push(
        <span
          key={i}
          className="cursor-pointer rounded-sm bg-lightGrayishCyanTablets px-2 py-1 text-lg font-bold text-desaturatedDarkCyan duration-200 hover:bg-desaturatedDarkCyan hover:text-white"
          onClick={(event) => handleFilterClick(event, filterItems[i])}
        >
          {filterItems[i]}
        </span>,
      );
  }

  return (
    <article key={data.id} className="relative">
      <div
        className="absolute -top-7 left-6 z-10 h-[3.25rem] w-[3.25rem] 
          lg:left-[2.6rem] lg:top-[2rem] lg:h-[5.9rem] lg:w-[5.9rem]"
      >
        <Image fill src={data.logo} alt="company logo" />
      </div>
      <div className="relative h-full w-full overflow-hidden rounded-md bg-white shadow-xl shadow-desaturatedDarkCyan/15 ">
        <div
          className="mx-6 mb-6 mt-9 flex flex-col gap-2 
                        lg:mb-8 lg:ml-[10.25rem] lg:mr-11 lg:mt-8 lg:flex-row"
        >
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 lg:gap-3">
              <h2
                className="text-md font-bold text-desaturatedDarkCyan
                            lg:text-xl"
              >
                {data.company}
              </h2>
              {data.new && (
                <span
                  className="ml-5 h-[1.5rem] rounded-xl bg-desaturatedDarkCyan px-2 text-base uppercase leading-[1.65rem] text-white
                                lg:relative lg:top-[0.2rem] lg:ml-2 lg:px-[0.6rem] lg:text-[0.9rem] lg:leading-[1.8rem]"
                >
                  new!
                </span>
              )}
              {data.featured && (
                <span
                  className="h-[1.5rem] rounded-xl bg-veryDarkGrayishCyan px-2 text-base uppercase leading-[1.65rem] text-white
                                lg:relative lg:top-[0.2rem] lg:px-[0.6rem] lg:text-[0.9rem] lg:leading-[1.8rem]"
                >
                  featured
                </span>
              )}
            </div>
            <h3
              className="cursor-pointer text-lg font-bold tracking-tighter text-veryDarkGrayishCyan duration-200 hover:text-desaturatedDarkCyan
                        lg:text-2xl lg:tracking-tight"
            >
              {data.position}
            </h3>
            <ul className="lg:-mt-1 lg:flex lg:gap-[0.4rem]">
              <li className="inline text-darkGrayishCyan lg:text-xl">
                {data.postedAt}
              </li>
              <li className="ml-2.5 inline text-darkGrayishCyan">•</li>
              <li className="ml-2.5 inline text-darkGrayishCyan lg:text-xl">
                {data.contract}
              </li>
              <li className="ml-2.5 inline text-darkGrayishCyan">•</li>
              <li className="ml-2.5 inline text-darkGrayishCyan lg:text-xl">
                {data.location}
              </li>
            </ul>
          </div>
          <div
            data-elements={filterElements.length === 0 ? "false" : "true"}
            className="data-[elements=false]:-mb-5 lg:relative lg:-top-1 lg:mb-auto lg:ml-auto lg:mt-auto"
          >
            {filterElements.length !== 0 ? (
              <hr className="border-darkGrayishCyanm mt-2 lg:hidden" />
            ) : (
              <></>
            )}
            <div className="mt-2.5 flex w-full flex-wrap gap-5 lg:justify-end">
              {filterElements.length !== 0 ? filterElements : <></>}
            </div>
          </div>
        </div>

        {data.featured && (
          <div className="absolute -top-0 left-0 h-full w-[5px] bg-desaturatedDarkCyan"></div>
        )}
      </div>
    </article>
  );
}
