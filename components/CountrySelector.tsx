/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Autocomplete, AutocompleteItem, Avatar, Image } from '@nextui-org/react';

import countries from '@/data/countries';
import { Country } from '@/types/common';

function CountrySelector() {
  return (
    <Autocomplete className="dark bg-background max-w-xs" label="Select country">
      {countries.map((country: Country) => (
        <AutocompleteItem key={`${country.code}--${country.name}`} textValue={country.name}>
          <div className="flex">
            <div className="mr-3">
              <img alt={country.name} width={24} src={country.flag} />
            </div>
            {country.name}
          </div>
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}

export default CountrySelector;
