import { Country } from '@/types/common';

const countries: Country[] = [
  { flag: '/img/flags/united-states.svg', name: 'United States' },
  { flag: '/img/flags/ascension-island.svg', name: 'Ascension Island' },
  { flag: '/img/flags/andorra.svg', name: 'Andorra' },
  { flag: '/img/flags/united-arab-emirates.svg', name: 'United Arab Emirates' },
  { flag: '/img/flags/afghanistan.svg', name: 'Afghanistan' },
  { flag: '/img/flags/antigua-barbuda.svg', name: 'Antigua & Barbuda' },
  { flag: '/img/flags/anguilla.svg', name: 'Anguilla' },
  { flag: '/img/flags/albania.svg', name: 'Albania' },
  { flag: '/img/flags/armenia.svg', name: 'Armenia' },
  { flag: '/img/flags/angola.svg', name: 'Angola' },
  { flag: '/img/flags/antarctica.svg', name: 'Antarctica' },
  { flag: '/img/flags/argentina.svg', name: 'Argentina' },
  { flag: '/img/flags/american-samoa.svg', name: 'American Samoa' },
  { flag: '/img/flags/austria.svg', name: 'Austria' },
  { flag: '/img/flags/australia.svg', name: 'Australia' },
  { flag: '/img/flags/aruba.svg', name: 'Aruba' },
  { flag: '/img/flags/land-islands.svg', name: 'Åland Islands' },
  { flag: '/img/flags/azerbaijan.svg', name: 'Azerbaijan' },
  { flag: '/img/flags/bosnia-herzegovina.svg', name: 'Bosnia & Herzegovina' },
  { flag: '/img/flags/barbados.svg', name: 'Barbados' },
  { flag: '/img/flags/bangladesh.svg', name: 'Bangladesh' },
  { flag: '/img/flags/belgium.svg', name: 'Belgium' },
  { flag: '/img/flags/burkina-faso.svg', name: 'Burkina Faso' },
  { flag: '/img/flags/bulgaria.svg', name: 'Bulgaria' },
  { flag: '/img/flags/bahrain.svg', name: 'Bahrain' },
  { flag: '/img/flags/burundi.svg', name: 'Burundi' },
  { flag: '/img/flags/benin.svg', name: 'Benin' },
  { flag: '/img/flags/st-barthlemy.svg', name: 'St. Barthélemy' },
  { flag: '/img/flags/bermuda.svg', name: 'Bermuda' },
  { flag: '/img/flags/brunei.svg', name: 'Brunei' },
  { flag: '/img/flags/bolivia.svg', name: 'Bolivia' },
  { flag: '/img/flags/caribbean-netherlands.svg', name: 'Caribbean Netherlands' },
  { flag: '/img/flags/brazil.svg', name: 'Brazil' },
  { flag: '/img/flags/bahamas.svg', name: 'Bahamas' },
  { flag: '/img/flags/bhutan.svg', name: 'Bhutan' },
  { flag: '/img/flags/bouvet-island.svg', name: 'Bouvet Island' },
  { flag: '/img/flags/botswana.svg', name: 'Botswana' },
  { flag: '/img/flags/belarus.svg', name: 'Belarus' },
  { flag: '/img/flags/belize.svg', name: 'Belize' },
  { flag: '/img/flags/canada.svg', name: 'Canada' },
  { flag: '/img/flags/cocos-keeling-islands.svg', name: 'Cocos (Keeling) Islands' },
  { flag: '/img/flags/congo-kinshasa.svg', name: 'Congo - Kinshasa' },
  { flag: '/img/flags/central-african-republic.svg', name: 'Central African Republic' },
  { flag: '/img/flags/congo-brazzaville.svg', name: 'Congo - Brazzaville' },
  { flag: '/img/flags/switzerland.svg', name: 'Switzerland' },
  { flag: '/img/flags/cte-divoire.svg', name: 'Côte d’Ivoire' },
  { flag: '/img/flags/cook-islands.svg', name: 'Cook Islands' },
  { flag: '/img/flags/chile.svg', name: 'Chile' },
  { flag: '/img/flags/cameroon.svg', name: 'Cameroon' },
  { flag: '/img/flags/china.svg', name: 'China' },
  { flag: '/img/flags/colombia.svg', name: 'Colombia' },
  { flag: '/img/flags/clipperton-island.svg', name: 'Clipperton Island' },
  { flag: '/img/flags/costa-rica.svg', name: 'Costa Rica' },
  { flag: '/img/flags/cuba.svg', name: 'Cuba' },
  { flag: '/img/flags/cape-verde.svg', name: 'Cape Verde' },
  { flag: '/img/flags/curaao.svg', name: 'Curaçao' },
  { flag: '/img/flags/christmas-island.svg', name: 'Christmas Island' },
  { flag: '/img/flags/cyprus.svg', name: 'Cyprus' },
  { flag: '/img/flags/czechia.svg', name: 'Czechia' },
  { flag: '/img/flags/germany.svg', name: 'Germany' },
  { flag: '/img/flags/diego-garcia.svg', name: 'Diego Garcia' },
  { flag: '/img/flags/djibouti.svg', name: 'Djibouti' },
  { flag: '/img/flags/denmark.svg', name: 'Denmark' },
  { flag: '/img/flags/dominica.svg', name: 'Dominica' },
  { flag: '/img/flags/dominican-republic.svg', name: 'Dominican Republic' },
  { flag: '/img/flags/algeria.svg', name: 'Algeria' },
  { flag: '/img/flags/ceuta-melilla.svg', name: 'Ceuta & Melilla' },
  { flag: '/img/flags/ecuador.svg', name: 'Ecuador' },
  { flag: '/img/flags/estonia.svg', name: 'Estonia' },
  { flag: '/img/flags/egypt.svg', name: 'Egypt' },
  { flag: '/img/flags/western-sahara.svg', name: 'Western Sahara' },
  { flag: '/img/flags/eritrea.svg', name: 'Eritrea' },
  { flag: '/img/flags/spain.svg', name: 'Spain' },
  { flag: '/img/flags/ethiopia.svg', name: 'Ethiopia' },
  { flag: '/img/flags/european-union.svg', name: 'European Union' },
  { flag: '/img/flags/finland.svg', name: 'Finland' },
  { flag: '/img/flags/fiji.svg', name: 'Fiji' },
  { flag: '/img/flags/falkland-islands.svg', name: 'Falkland Islands' },
  { flag: '/img/flags/micronesia.svg', name: 'Micronesia' },
  { flag: '/img/flags/faroe-islands.svg', name: 'Faroe Islands' },
  { flag: '/img/flags/france.svg', name: 'France' },
  { flag: '/img/flags/gabon.svg', name: 'Gabon' },
  { flag: '/img/flags/united-kingdom.svg', name: 'United Kingdom' },
  { flag: '/img/flags/grenada.svg', name: 'Grenada' },
  { flag: '/img/flags/georgia.svg', name: 'Georgia' },
  { flag: '/img/flags/french-guiana.svg', name: 'French Guiana' },
  { flag: '/img/flags/guernsey.svg', name: 'Guernsey' },
  { flag: '/img/flags/ghana.svg', name: 'Ghana' },
  { flag: '/img/flags/gibraltar.svg', name: 'Gibraltar' },
  { flag: '/img/flags/greenland.svg', name: 'Greenland' },
  { flag: '/img/flags/gambia.svg', name: 'Gambia' },
  { flag: '/img/flags/guinea.svg', name: 'Guinea' },
  { flag: '/img/flags/guadeloupe.svg', name: 'Guadeloupe' },
  { flag: '/img/flags/equatorial-guinea.svg', name: 'Equatorial Guinea' },
  { flag: '/img/flags/greece.svg', name: 'Greece' },
  {
    flag: '/img/flags/south-georgia-south-sandwich-islands.svg',
    name: 'South Georgia & South Sandwich Islands',
  },
  { flag: '/img/flags/guatemala.svg', name: 'Guatemala' },
  { flag: '/img/flags/guam.svg', name: 'Guam' },
  { flag: '/img/flags/guineabissau.svg', name: 'Guinea-Bissau' },
  { flag: '/img/flags/guyana.svg', name: 'Guyana' },
  { flag: '/img/flags/hong-kong-sar-china.svg', name: 'Hong Kong SAR China' },
  { flag: '/img/flags/heard-mcdonald-islands.svg', name: 'Heard & McDonald Islands' },
  { flag: '/img/flags/honduras.svg', name: 'Honduras' },
  { flag: '/img/flags/croatia.svg', name: 'Croatia' },
  { flag: '/img/flags/haiti.svg', name: 'Haiti' },
  { flag: '/img/flags/hungary.svg', name: 'Hungary' },
  { flag: '/img/flags/canary-islands.svg', name: 'Canary Islands' },
  { flag: '/img/flags/indonesia.svg', name: 'Indonesia' },
  { flag: '/img/flags/ireland.svg', name: 'Ireland' },
  { flag: '/img/flags/israel.svg', name: 'Israel' },
  { flag: '/img/flags/isle-of-man.svg', name: 'Isle of Man' },
  { flag: '/img/flags/india.svg', name: 'India' },
  { flag: '/img/flags/british-indian-ocean-territory.svg', name: 'British Indian Ocean Territory' },
  { flag: '/img/flags/iraq.svg', name: 'Iraq' },
  { flag: '/img/flags/iran.svg', name: 'Iran' },
  { flag: '/img/flags/iceland.svg', name: 'Iceland' },
  { flag: '/img/flags/italy.svg', name: 'Italy' },
  { flag: '/img/flags/jersey.svg', name: 'Jersey' },
  { flag: '/img/flags/jamaica.svg', name: 'Jamaica' },
  { flag: '/img/flags/jordan.svg', name: 'Jordan' },
  { flag: '/img/flags/japan.svg', name: 'Japan' },
  { flag: '/img/flags/kenya.svg', name: 'Kenya' },
  { flag: '/img/flags/kyrgyzstan.svg', name: 'Kyrgyzstan' },
  { flag: '/img/flags/cambodia.svg', name: 'Cambodia' },
  { flag: '/img/flags/kiribati.svg', name: 'Kiribati' },
  { flag: '/img/flags/comoros.svg', name: 'Comoros' },
  { flag: '/img/flags/st-kitts-nevis.svg', name: 'St. Kitts & Nevis' },
  { flag: '/img/flags/north-korea.svg', name: 'North Korea' },
  { flag: '/img/flags/south-korea.svg', name: 'South Korea' },
  { flag: '/img/flags/kuwait.svg', name: 'Kuwait' },
  { flag: '/img/flags/cayman-islands.svg', name: 'Cayman Islands' },
  { flag: '/img/flags/kazakhstan.svg', name: 'Kazakhstan' },
  { flag: '/img/flags/laos.svg', name: 'Laos' },
  { flag: '/img/flags/lebanon.svg', name: 'Lebanon' },
  { flag: '/img/flags/st-lucia.svg', name: 'St. Lucia' },
  { flag: '/img/flags/liechtenstein.svg', name: 'Liechtenstein' },
  { flag: '/img/flags/sri-lanka.svg', name: 'Sri Lanka' },
  { flag: '/img/flags/liberia.svg', name: 'Liberia' },
  { flag: '/img/flags/lesotho.svg', name: 'Lesotho' },
  { flag: '/img/flags/lithuania.svg', name: 'Lithuania' },
  { flag: '/img/flags/luxembourg.svg', name: 'Luxembourg' },
  { flag: '/img/flags/latvia.svg', name: 'Latvia' },
  { flag: '/img/flags/libya.svg', name: 'Libya' },
  { flag: '/img/flags/morocco.svg', name: 'Morocco' },
  { flag: '/img/flags/monaco.svg', name: 'Monaco' },
  { flag: '/img/flags/moldova.svg', name: 'Moldova' },
  { flag: '/img/flags/montenegro.svg', name: 'Montenegro' },
  { flag: '/img/flags/st-martin.svg', name: 'St. Martin' },
  { flag: '/img/flags/madagascar.svg', name: 'Madagascar' },
  { flag: '/img/flags/marshall-islands.svg', name: 'Marshall Islands' },
  { flag: '/img/flags/north-macedonia.svg', name: 'North Macedonia' },
  { flag: '/img/flags/mali.svg', name: 'Mali' },
  { flag: '/img/flags/myanmar-burma.svg', name: 'Myanmar (Burma)' },
  { flag: '/img/flags/mongolia.svg', name: 'Mongolia' },
  { flag: '/img/flags/macao-sar-china.svg', name: 'Macao Sar China' },
  { flag: '/img/flags/northern-mariana-islands.svg', name: 'Northern Mariana Islands' },
  { flag: '/img/flags/martinique.svg', name: 'Martinique' },
  { flag: '/img/flags/mauritania.svg', name: 'Mauritania' },
  { flag: '/img/flags/montserrat.svg', name: 'Montserrat' },
  { flag: '/img/flags/malta.svg', name: 'Malta' },
  { flag: '/img/flags/mauritius.svg', name: 'Mauritius' },
  { flag: '/img/flags/maldives.svg', name: 'Maldives' },
  { flag: '/img/flags/malawi.svg', name: 'Malawi' },
  { flag: '/img/flags/mexico.svg', name: 'Mexico' },
  { flag: '/img/flags/malaysia.svg', name: 'Malaysia' },
  { flag: '/img/flags/mozambique.svg', name: 'Mozambique' },
  { flag: '/img/flags/namibia.svg', name: 'Namibia' },
  { flag: '/img/flags/new-caledonia.svg', name: 'New Caledonia' },
  { flag: '/img/flags/niger.svg', name: 'Niger' },
  { flag: '/img/flags/norfolk-island.svg', name: 'Norfolk Island' },
  { flag: '/img/flags/nigeria.svg', name: 'Nigeria' },
  { flag: '/img/flags/nicaragua.svg', name: 'Nicaragua' },
  { flag: '/img/flags/netherlands.svg', name: 'Netherlands' },
  { flag: '/img/flags/norway.svg', name: 'Norway' },
  { flag: '/img/flags/nepal.svg', name: 'Nepal' },
  { flag: '/img/flags/nauru.svg', name: 'Nauru' },
  { flag: '/img/flags/niue.svg', name: 'Niue' },
  { flag: '/img/flags/new-zealand.svg', name: 'New Zealand' },
  { flag: '/img/flags/oman.svg', name: 'Oman' },
  { flag: '/img/flags/panama.svg', name: 'Panama' },
  { flag: '/img/flags/peru.svg', name: 'Peru' },
  { flag: '/img/flags/french-polynesia.svg', name: 'French Polynesia' },
  { flag: '/img/flags/papua-new-guinea.svg', name: 'Papua New Guinea' },
  { flag: '/img/flags/philippines.svg', name: 'Philippines' },
  { flag: '/img/flags/pakistan.svg', name: 'Pakistan' },
  { flag: '/img/flags/poland.svg', name: 'Poland' },
  { flag: '/img/flags/st-pierre-miquelon.svg', name: 'St. Pierre & Miquelon' },
  { flag: '/img/flags/pitcairn-islands.svg', name: 'Pitcairn Islands' },
  { flag: '/img/flags/puerto-rico.svg', name: 'Puerto Rico' },
  { flag: '/img/flags/palestinian-territories.svg', name: 'Palestinian Territories' },
  { flag: '/img/flags/portugal.svg', name: 'Portugal' },
  { flag: '/img/flags/palau.svg', name: 'Palau' },
  { flag: '/img/flags/paraguay.svg', name: 'Paraguay' },
  { flag: '/img/flags/qatar.svg', name: 'Qatar' },
  { flag: '/img/flags/runion.svg', name: 'Réunion' },
  { flag: '/img/flags/romania.svg', name: 'Romania' },
  { flag: '/img/flags/serbia.svg', name: 'Serbia' },
  { flag: '/img/flags/russia.svg', name: 'Russia' },
  { flag: '/img/flags/rwanda.svg', name: 'Rwanda' },
  { flag: '/img/flags/saudi-arabia.svg', name: 'Saudi Arabia' },
  { flag: '/img/flags/solomon-islands.svg', name: 'Solomon Islands' },
  { flag: '/img/flags/seychelles.svg', name: 'Seychelles' },
  { flag: '/img/flags/sudan.svg', name: 'Sudan' },
  { flag: '/img/flags/sweden.svg', name: 'Sweden' },
  { flag: '/img/flags/singapore.svg', name: 'Singapore' },
  { flag: '/img/flags/st-helena.svg', name: 'St. Helena' },
  { flag: '/img/flags/slovenia.svg', name: 'Slovenia' },
  { flag: '/img/flags/svalbard-jan-mayen.svg', name: 'Svalbard & Jan Mayen' },
  { flag: '/img/flags/slovakia.svg', name: 'Slovakia' },
  { flag: '/img/flags/sierra-leone.svg', name: 'Sierra Leone' },
  { flag: '/img/flags/san-marino.svg', name: 'San Marino' },
  { flag: '/img/flags/senegal.svg', name: 'Senegal' },
  { flag: '/img/flags/somalia.svg', name: 'Somalia' },
  { flag: '/img/flags/suriname.svg', name: 'Suriname' },
  { flag: '/img/flags/south-sudan.svg', name: 'South Sudan' },
  { flag: '/img/flags/so-tom-prncipe.svg', name: 'São Tomé & Príncipe' },
  { flag: '/img/flags/el-salvador.svg', name: 'El Salvador' },
  { flag: '/img/flags/sint-maarten.svg', name: 'Sint Maarten' },
  { flag: '/img/flags/syria.svg', name: 'Syria' },
  { flag: '/img/flags/eswatini.svg', name: 'Eswatini' },
  { flag: '/img/flags/tristan-da-cunha.svg', name: 'Tristan Da Cunha' },
  { flag: '/img/flags/turks-caicos-islands.svg', name: 'Turks & Caicos Islands' },
  { flag: '/img/flags/chad.svg', name: 'Chad' },
  { flag: '/img/flags/french-southern-territories.svg', name: 'French Southern Territories' },
  { flag: '/img/flags/togo.svg', name: 'Togo' },
  { flag: '/img/flags/thailand.svg', name: 'Thailand' },
  { flag: '/img/flags/tajikistan.svg', name: 'Tajikistan' },
  { flag: '/img/flags/tokelau.svg', name: 'Tokelau' },
  { flag: '/img/flags/timorleste.svg', name: 'Timor-Leste' },
  { flag: '/img/flags/turkmenistan.svg', name: 'Turkmenistan' },
  { flag: '/img/flags/tunisia.svg', name: 'Tunisia' },
  { flag: '/img/flags/tonga.svg', name: 'Tonga' },
  { flag: '/img/flags/turkey.svg', name: 'Turkey' },
  { flag: '/img/flags/trinidad-tobago.svg', name: 'Trinidad & Tobago' },
  { flag: '/img/flags/tuvalu.svg', name: 'Tuvalu' },
  { flag: '/img/flags/taiwan.svg', name: 'Taiwan' },
  { flag: '/img/flags/tanzania.svg', name: 'Tanzania' },
  { flag: '/img/flags/ukraine.svg', name: 'Ukraine' },
  { flag: '/img/flags/uganda.svg', name: 'Uganda' },
  { flag: '/img/flags/us-outlying-islands.svg', name: 'U.S. Outlying Islands' },
  { flag: '/img/flags/united-nations.svg', name: 'United Nations' },
  { flag: '/img/flags/uruguay.svg', name: 'Uruguay' },
  { flag: '/img/flags/uzbekistan.svg', name: 'Uzbekistan' },
  { flag: '/img/flags/vatican-city.svg', name: 'Vatican City' },
  { flag: '/img/flags/st-vincent-grenadines.svg', name: 'St. Vincent & Grenadines' },
  { flag: '/img/flags/venezuela.svg', name: 'Venezuela' },
  { flag: '/img/flags/british-virgin-islands.svg', name: 'British Virgin Islands' },
  { flag: '/img/flags/us-virgin-islands.svg', name: 'U.S. Virgin Islands' },
  { flag: '/img/flags/vietnam.svg', name: 'Vietnam' },
  { flag: '/img/flags/vanuatu.svg', name: 'Vanuatu' },
  { flag: '/img/flags/wallis-futuna.svg', name: 'Wallis & Futuna' },
  { flag: '/img/flags/samoa.svg', name: 'Samoa' },
  { flag: '/img/flags/kosovo.svg', name: 'Kosovo' },
  { flag: '/img/flags/yemen.svg', name: 'Yemen' },
  { flag: '/img/flags/mayotte.svg', name: 'Mayotte' },
  { flag: '/img/flags/south-africa.svg', name: 'South Africa' },
  { flag: '/img/flags/zambia.svg', name: 'Zambia' },
  { flag: '/img/flags/zimbabwe.svg', name: 'Zimbabwe' },
  { flag: '/img/flags/england.svg', name: 'England' },
  { flag: '/img/flags/scotland.svg', name: 'Scotland' },
  { flag: '/img/flags/wales.svg', name: 'Wales' },
];

export default countries;
