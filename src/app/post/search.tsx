'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  // Fetching search parameters from the current URL
  const searchParams = useSearchParams();
  // Fetching the current path name
  const pathName = usePathname();
  // Accessing the replace function from the router
  const { replace } = useRouter();

  // Handling search input with debounce
  const handleSearch = useDebouncedCallback((term) => {
    // Creating a new URLSearchParams object with existing search parameters
    const params = new URLSearchParams(searchParams);
    // Setting the page number to 1 when a new search term is entered
    params.set('page', '1');
    // Setting the 'query' parameter if a search term is provided, or deleting it otherwise
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    // Replacing the current URL with updated search parameters
    replace(`${pathName}?${params.toString()}`);
  }, 300);


  return (
    <div className="relative flex flex-1 justify-end flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
      onChange={(e) => {
        handleSearch(e.target.value)
      }}
        className="peer block w-[300px] border-2 rounded-lg p-[13px] 
        placeholder:text-gray-500 pl-10 placeholder:font-medium focus:outline-none focus:border-sky-500"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-[76%] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}


