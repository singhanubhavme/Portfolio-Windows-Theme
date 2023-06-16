import { Fragment } from 'react';
import SearchIcon from '../../assets/icons/search-icon.svg';
import Image from 'next/image';

const Search = () => {
  return (
    <Fragment>
      <div className="search-box bg-white ml-3 flex flex-row pl-2 pr-16">
        <Image src={SearchIcon} className="w-5 ml-1 mr-1" alt="search icon" />
        <input
          type="text"
          className="pl-2 focus:outline-0 placeholder:text-slate-700"
          placeholder="Type here to search"
        />
      </div>
    </Fragment>
  );
};

export default Search;
