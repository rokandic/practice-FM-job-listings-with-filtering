import IconRemove from "./_icons/IconRemove";

interface FilterProps {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Filter({ filter, setFilter }: FilterProps) {
  if (filter.length < 1) {
    return <></>;
  }

  let filteredItems: JSX.Element[] = [];
  if (filter.length > 0)
    filter.forEach((item, index) =>
      filteredItems.push(filterItem(item, index, filter, setFilter)),
    );

  return (
    <>
      <section
        className="relative -top-10 bottom-0 mx-8 flex  flex-row rounded-md bg-white px-4 py-4 text-center shadow-xl shadow-desaturatedDarkCyan/15
                          lg:mx-44 lg:px-9"
      >
        <ul className="flex flex-row flex-wrap gap-2">{filteredItems}</ul>
        <button
          onClick={() => setFilter([])}
          className="ml-auto cursor-pointer px-3 text-lg font-bold text-darkGrayishCyan hover:text-desaturatedDarkCyan hover:underline"
        >
          Clear
        </button>
      </section>
    </>
  );
}

// Return a single filtered item with X button
function filterItem(
  name: string,
  index: number,
  filter: string[],
  setFilter: React.Dispatch<React.SetStateAction<string[]>>,
) {
  // remove a single filter item
  function handleXClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    name: string,
  ) {
    const newFilter = filter.filter((x) => x != name);
    setFilter(newFilter);
  }

  return (
    <li
      key={index}
      className="m-1 overflow-hidden rounded-md bg-lightGrayishCyan"
    >
      <div className="inline-block px-3 py-[0.3rem] text-base font-bold text-desaturatedDarkCyan">
        {name}
      </div>
      <div
        onClick={(event) => handleXClick(event, name)}
        className="inline-block cursor-pointer bg-desaturatedDarkCyan px-3 py-[0.3rem] duration-200 hover:bg-veryDarkGrayishCyan"
      >
        <IconRemove className="inline h-4 w-4 fill-white" />
      </div>
    </li>
  );
}
