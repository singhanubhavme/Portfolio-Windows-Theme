import { Fragment } from 'react';
import SearchIcon from '@/assets/icons/search-icon.svg';
import Image from 'next/image';

const Search = () => {
  return (
    <Fragment>
      <div className="search-box ml-3 flex flex-row bg-white pl-2 pr-16">
        <Image
          priority={true}
          src={SearchIcon}
          className="ml-1 mr-1 w-5"
          alt="search icon"
        />
        <input
          type="text"
          className="pl-2 placeholder:text-slate-700 focus:outline-0"
          placeholder="Type here to search"
        />
      </div>
    </Fragment>
  );
};

export default Search;
