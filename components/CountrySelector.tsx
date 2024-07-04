/* eslint-disable @next/next/no-img-element */
import React, { Key, useState } from 'react';
import { Autocomplete, AutocompleteItem, Avatar, Image } from '@nextui-org/react';

import countries from '@/data/countries';
import { Country } from '@/types/common';

type CountrySelectorProps = {
  selectedCountry: string | undefined;
  onCountryChange: (country: string | undefined) => void;
};

function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
  const handleCountryChange = (value: Key | null) => {
    onCountryChange(value?.toString());
  };

  return (
    <Autocomplete
      className="dark bg-background max-w-xs"
      label="Select country"
      selectedKey={selectedCountry}
      onSelectionChange={handleCountryChange}
    >
      {countries.map((country: Country) => (
        <AutocompleteItem key={`${country.name}`} textValue={country.name}>
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
