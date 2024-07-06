const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

const countries = [
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fa-1f1f8.svg',
    name: 'United States',
    code: 'us',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1e8.svg',
    name: 'Ascension Island',
    code: 'ac',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1e9.svg',
    name: 'Andorra',
    code: 'ad',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1ea.svg',
    name: 'United Arab Emirates',
    code: 'ae',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1eb.svg',
    name: 'Afghanistan',
    code: 'af',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1ec.svg',
    name: 'Antigua & Barbuda',
    code: 'ag',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1ee.svg',
    name: 'Anguilla',
    code: 'ai',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1f1.svg',
    name: 'Albania',
    code: 'al',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1f2.svg',
    name: 'Armenia',
    code: 'am',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1f4.svg',
    name: 'Angola',
    code: 'ad',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1f6.svg',
    name: 'Antarctica',
    code: 'aq',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1f7.svg',
    name: 'Argentina',
    code: 'ar',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1f8.svg',
    name: 'American Samoa',
    code: 'as',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1f9.svg',
    name: 'Austria',
    code: 'at',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1fa.svg',
    name: 'Australia',
    code: 'au',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1fc.svg',
    name: 'Aruba',
    code: 'aw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1fd.svg',
    name: 'Åland Islands',
    code: 'ax',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e6-1f1ff.svg',
    name: 'Azerbaijan',
    code: 'az',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1e6.svg',
    name: 'Bosnia & Herzegovina',
    code: 'ba',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1e7.svg',
    name: 'Barbados',
    code: 'bb',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1e9.svg',
    name: 'Bangladesh',
    code: 'bd',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1ea.svg',
    name: 'Belgium',
    code: 'be',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1eb.svg',
    name: 'Burkina Faso',
    code: 'bf',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1ec.svg',
    name: 'Bulgaria',
    code: 'bg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1ed.svg',
    name: 'Bahrain',
    code: 'bh',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1ee.svg',
    name: 'Burundi',
    code: 'bi',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1ef.svg',
    name: 'Benin',
    code: 'bj',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1f1.svg',
    name: 'St. Barthélemy',
    code: 'bl',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1f2.svg',
    name: 'Bermuda',
    code: 'bm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1f3.svg',
    name: 'Brunei',
    code: 'bn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1f4.svg',
    name: 'Bolivia',
    code: 'bo',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1f6.svg',
    name: 'Caribbean Netherlands',
    code: 'cne',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1f7.svg',
    name: 'Brazil',
    code: 'br',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1f8.svg',
    name: 'Bahamas',
    code: 'bs',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1f9.svg',
    name: 'Bhutan',
    code: 'bt',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1fb.svg',
    name: 'Bouvet Island',
    code: 'bv',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1fc.svg',
    name: 'Botswana',
    code: 'bw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1fe.svg',
    name: 'Belarus',
    code: 'by',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e7-1f1ff.svg',
    name: 'Belize',
    code: 'bz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1e6.svg',
    name: 'Canada',
    code: 'ca',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1e8.svg',
    name: 'Cocos (Keeling) Islands',
    code: 'cc',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1e9.svg',
    name: 'Congo - Kinshasa',
    code: 'cg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1eb.svg',
    name: 'Central African Republic',
    code: 'cf',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1ec.svg',
    name: 'Congo - Brazzaville',
    code: 'cd',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1ed.svg',
    name: 'Switzerland',
    code: 'ch',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1ee.svg',
    name: 'Côte d’Ivoire',
    code: 'ci',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1f0.svg',
    name: 'Cook Islands',
    code: 'ck',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1f1.svg',
    name: 'Chile',
    code: 'cl',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1f2.svg',
    name: 'Cameroon',
    code: 'cm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1f3.svg',
    name: 'China',
    code: 'cn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1f4.svg',
    name: 'Colombia',
    code: 'co',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1f5.svg',
    name: 'Clipperton Island',
    code: 'cp',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1f7.svg',
    name: 'Costa Rica',
    code: 'cr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1fa.svg',
    name: 'Cuba',
    code: 'cu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1fb.svg',
    name: 'Cape Verde',
    code: 'cv',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1fc.svg',
    name: 'Curaçao',
    code: 'cw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1fd.svg',
    name: 'Christmas Island',
    code: 'cx',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1fe.svg',
    name: 'Cyprus',
    code: 'cy',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e8-1f1ff.svg',
    name: 'Czechia',
    code: 'cz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e9-1f1ea.svg',
    name: 'Germany',
    code: 'de',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e9-1f1ec.svg',
    name: 'Diego Garcia',
    code: 'dg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e9-1f1ef.svg',
    name: 'Djibouti',
    code: 'dj',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e9-1f1f0.svg',
    name: 'Denmark',
    code: 'dk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e9-1f1f2.svg',
    name: 'Dominica',
    code: 'dm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e9-1f1f4.svg',
    name: 'Dominican Republic',
    code: 'do',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1e9-1f1ff.svg',
    name: 'Algeria',
    code: 'dz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1e6.svg',
    name: 'Ceuta & Melilla',
    code: 'ea',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1e8.svg',
    name: 'Ecuador',
    code: 'ec',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1ea.svg',
    name: 'Estonia',
    code: 'ee',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1ec.svg',
    name: 'Egypt',
    code: 'eg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1ed.svg',
    name: 'Western Sahara',
    code: 'eh',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1f7.svg',
    name: 'Eritrea',
    code: 'er',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1f8.svg',
    name: 'Spain',
    code: 'es',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1f9.svg',
    name: 'Ethiopia',
    code: 'et',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ea-1f1fa.svg',
    name: 'European Union',
    code: 'eu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1eb-1f1ee.svg',
    name: 'Finland',
    code: 'fi',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1eb-1f1ef.svg',
    name: 'Fiji',
    code: 'fj',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1eb-1f1f0.svg',
    name: 'Falkland Islands',
    code: 'fk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1eb-1f1f2.svg',
    name: 'Micronesia',
    code: 'fm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1eb-1f1f4.svg',
    name: 'Faroe Islands',
    code: 'fo',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1eb-1f1f7.svg',
    name: 'France',
    code: 'fr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1e6.svg',
    name: 'Gabon',
    code: 'ga',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1e7.svg',
    name: 'United Kingdom',
    code: 'gb',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1e9.svg',
    name: 'Grenada',
    code: 'gd',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1ea.svg',
    name: 'Georgia',
    code: 'ge',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1eb.svg',
    name: 'French Guiana',
    code: 'gf',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1ec.svg',
    name: 'Guernsey',
    code: 'gg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1ed.svg',
    name: 'Ghana',
    code: 'gh',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1ee.svg',
    name: 'Gibraltar',
    code: 'gi',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f1.svg',
    name: 'Greenland',
    code: 'gl',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f2.svg',
    name: 'Gambia',
    code: 'gm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f3.svg',
    name: 'Guinea',
    code: 'gn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f5.svg',
    name: 'Guadeloupe',
    code: 'gp',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f6.svg',
    name: 'Equatorial Guinea',
    code: 'gq',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f7.svg',
    name: 'Greece',
    code: 'gr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f8.svg',
    name: "South Georgia & South', Sandwich Islands",
    code: 'gs',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f9.svg',
    name: 'Guatemala',
    code: 'gt',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1fa.svg',
    name: 'Guam',
    code: 'gu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1fc.svg',
    name: 'Guinea-Bissau',
    code: 'gw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1fe.svg',
    name: 'Guyana',
    code: 'gy',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ed-1f1f0.svg',
    name: 'Hong Kong SAR China',
    code: 'hk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ed-1f1f2.svg',
    name: 'Heard & McDonald Islands',
    code: 'hm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ed-1f1f3.svg',
    name: 'Honduras',
    code: 'hn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ed-1f1f7.svg',
    name: 'Croatia',
    code: 'hr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ed-1f1f9.svg',
    name: 'Haiti',
    code: 'ht',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ed-1f1fa.svg',
    name: 'Hungary',
    code: 'hu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1e8.svg',
    name: 'Canary Islands',
    code: 'ic',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1e9.svg',
    name: 'Indonesia',
    code: 'id',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1ea.svg',
    name: 'Ireland',
    code: 'ie',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1f1.svg',
    name: 'Israel',
    code: 'il',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1f2.svg',
    name: 'Isle of Man',
    code: 'im',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1f3.svg',
    name: 'India',
    code: 'in',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1f4.svg',
    name: 'British Indian Ocean Territory',
    code: 'io',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1f6.svg',
    name: 'Iraq',
    code: 'iq',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1f7.svg',
    name: 'Iran',
    code: 'ir',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1f8.svg',
    name: 'Iceland',
    code: 'is',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ee-1f1f9.svg',
    name: 'Italy',
    code: 'it',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ef-1f1ea.svg',
    name: 'Jersey',
    code: 'je',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ef-1f1f2.svg',
    name: 'Jamaica',
    code: 'jm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ef-1f1f4.svg',
    name: 'Jordan',
    code: 'jo',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ef-1f1f5.svg',
    name: 'Japan',
    code: 'jp',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1ea.svg',
    name: 'Kenya',
    code: 'ke',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1ec.svg',
    name: 'Kyrgyzstan',
    code: 'kg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1ed.svg',
    name: 'Cambodia',
    code: 'kh',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1ee.svg',
    name: 'Kiribati',
    code: 'ki',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1f2.svg',
    name: 'Comoros',
    code: 'km',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1f3.svg',
    name: 'St. Kitts & Nevis',
    code: 'kn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1f5.svg',
    name: 'North Korea',
    code: 'kp',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1f7.svg',
    name: 'South Korea',
    code: 'kr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1fc.svg',
    name: 'Kuwait',
    code: 'kw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1fe.svg',
    name: 'Cayman Islands',
    code: 'ky',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f0-1f1ff.svg',
    name: 'Kazakhstan',
    code: 'kz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1e6.svg',
    name: 'Laos',
    code: 'la',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1e7.svg',
    name: 'Lebanon',
    code: 'lb',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1e8.svg',
    name: 'St. Lucia',
    code: 'lc',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1ee.svg',
    name: 'Liechtenstein',
    code: 'li',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1f0.svg',
    name: 'Sri Lanka',
    code: 'lk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1f7.svg',
    name: 'Liberia',
    code: 'lr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1f8.svg',
    name: 'Lesotho',
    code: 'ls',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1f9.svg',
    name: 'Lithuania',
    code: 'lt',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1fa.svg',
    name: 'Luxembourg',
    code: 'lu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1fb.svg',
    name: 'Latvia',
    code: 'lv',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f1-1f1fe.svg',
    name: 'Libya',
    code: 'ly',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1e6.svg',
    name: 'Morocco',
    code: 'ma',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1e8.svg',
    name: 'Monaco',
    code: 'mc',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1e9.svg',
    name: 'Moldova',
    code: 'md',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1ea.svg',
    name: 'Montenegro',
    code: 'me',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1eb.svg',
    name: 'St. Martin',
    code: 'mf',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1ec.svg',
    name: 'Madagascar',
    code: 'mg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1ed.svg',
    name: 'Marshall Islands',
    code: 'mh',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f0.svg',
    name: 'North Macedonia',
    code: 'mk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f1.svg',
    name: 'Mali',
    code: 'ml',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f2.svg',
    name: 'Myanmar (Burma)',
    code: 'mm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f3.svg',
    name: 'Mongolia',
    code: 'mn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f4.svg',
    name: 'Macao Sar China',
    code: 'mo',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f5.svg',
    name: 'Northern Mariana Islands',
    code: 'mp',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f6.svg',
    name: 'Martinique',
    code: 'mq',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f7.svg',
    name: 'Mauritania',
    code: 'mr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f8.svg',
    name: 'Montserrat',
    code: 'ms',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1f9.svg',
    name: 'Malta',
    code: 'mt',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1fa.svg',
    name: 'Mauritius',
    code: 'mu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1fb.svg',
    name: 'Maldives',
    code: 'mv',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1fc.svg',
    name: 'Malawi',
    code: 'mw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1fd.svg',
    name: 'Mexico',
    code: 'mx',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1fe.svg',
    name: 'Malaysia',
    code: 'my',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f2-1f1ff.svg',
    name: 'Mozambique',
    code: 'mz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1e6.svg',
    name: 'Namibia',
    code: 'na',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1e8.svg',
    name: 'New Caledonia',
    code: 'nc',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1ea.svg',
    name: 'Niger',
    code: 'ne',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1eb.svg',
    name: 'Norfolk Island',
    code: 'nf',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1ec.svg',
    name: 'Nigeria',
    code: 'ng',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1ee.svg',
    name: 'Nicaragua',
    code: 'ni',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1f1.svg',
    name: 'Netherlands',
    code: 'nl',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1f4.svg',
    name: 'Norway',
    code: 'no',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1f5.svg',
    name: 'Nepal',
    code: 'np',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1f7.svg',
    name: 'Nauru',
    code: 'nr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1fa.svg',
    name: 'Niue',
    code: 'nu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f3-1f1ff.svg',
    name: 'New Zealand',
    code: 'nz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f4-1f1f2.svg',
    name: 'Oman',
    code: 'om',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1e6.svg',
    name: 'Panama',
    code: 'pa',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1ea.svg',
    name: 'Peru',
    code: 'pe',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1eb.svg',
    name: 'French Polynesia',
    code: 'pf',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1ec.svg',
    name: 'Papua New Guinea',
    code: 'pg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1ed.svg',
    name: 'Philippines',
    code: 'ph',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1f0.svg',
    name: 'Pakistan',
    code: 'pk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1f1.svg',
    name: 'Poland',
    code: 'pl',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1f2.svg',
    name: 'St. Pierre & Miquelon',
    code: 'pm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1f3.svg',
    name: 'Pitcairn Islands',
    code: 'pn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1f7.svg',
    name: 'Puerto Rico',
    code: 'pr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1f8.svg',
    name: 'Palestinian Territories',
    code: 'ps',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1f9.svg',
    name: 'Portugal',
    code: 'pt',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1fc.svg',
    name: 'Palau',
    code: 'pw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f5-1f1fe.svg',
    name: 'Paraguay',
    code: 'py',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f6-1f1e6.svg',
    name: 'Qatar',
    code: 'qa',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f7-1f1ea.svg',
    name: 'Réunion',
    code: 're',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f7-1f1f4.svg',
    name: 'Romania',
    code: 'ro',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f7-1f1f8.svg',
    name: 'Serbia',
    code: 'yu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f7-1f1fa.svg',
    name: 'Russia',
    code: 'ru',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f7-1f1fc.svg',
    name: 'Rwanda',
    code: 'rw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1e6.svg',
    name: 'Saudi Arabia',
    code: 'sa',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1e7.svg',
    name: 'Solomon Islands',
    code: 'sb',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1e8.svg',
    name: 'Seychelles',
    code: 'sc',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1e9.svg',
    name: 'Sudan',
    code: 'sd',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1ea.svg',
    name: 'Sweden',
    code: 'se',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1ec.svg',
    name: 'Singapore',
    code: 'sg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1ed.svg',
    name: 'St. Helena',
    code: 'sh',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1ee.svg',
    name: 'Slovenia',
    code: 'si',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1ef.svg',
    name: 'Svalbard & Jan Mayen',
    code: 'sj',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1f0.svg',
    name: 'Slovakia',
    code: 'sk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1f1.svg',
    name: 'Sierra Leone',
    code: 'sl',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1f2.svg',
    name: 'San Marino',
    code: 'sm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1f3.svg',
    name: 'Senegal',
    code: 'sn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1f4.svg',
    name: 'Somalia',
    code: 'so',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1f7.svg',
    name: 'Suriname',
    code: 'sr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1f8.svg',
    name: 'South Sudan',
    code: 'ss',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1f9.svg',
    name: 'São Tomé & Príncipe',
    code: 'st',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1fb.svg',
    name: 'El Salvador',
    code: 'sv',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1fd.svg',
    name: 'Sint Maarten',
    code: 'sx',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1fe.svg',
    name: 'Syria',
    code: 'sy',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f8-1f1ff.svg',
    name: 'Eswatini',
    code: 'sz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1e6.svg',
    name: 'Tristan Da Cunha',
    code: 'sh',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1e8.svg',
    name: 'Turks & Caicos Islands',
    code: 'tc',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1e9.svg',
    name: 'Chad',
    code: 'td',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1eb.svg',
    name: 'French Southern Territories',
    code: 'tf',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1ec.svg',
    name: 'Togo',
    code: 'tg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1ed.svg',
    name: 'Thailand',
    code: 'th',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1ef.svg',
    name: 'Tajikistan',
    code: 'tj',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1f0.svg',
    name: 'Tokelau',
    code: 'tk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1f1.svg',
    name: 'Timor-Leste',
    code: 'tl',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1f2.svg',
    name: 'Turkmenistan',
    code: 'tm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1f3.svg',
    name: 'Tunisia',
    code: 'tn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1f4.svg',
    name: 'Tonga',
    code: 'to',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1f7.svg',
    name: 'Turkey',
    code: 'tr',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1f9.svg',
    name: 'Trinidad & Tobago',
    code: 'tt',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1fb.svg',
    name: 'Tuvalu',
    code: 'tv',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1fc.svg',
    name: 'Taiwan',
    code: 'tw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1f9-1f1ff.svg',
    name: 'Tanzania',
    code: 'tz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fa-1f1e6.svg',
    name: 'Ukraine',
    code: 'ua',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fa-1f1ec.svg',
    name: 'Uganda',
    code: 'ug',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fa-1f1f2.svg',
    name: 'U.S. Outlying Islands',
    code: 'um',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fa-1f1f3.svg',
    name: 'United Nations',
    code: 'un',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fa-1f1fe.svg',
    name: 'Uruguay',
    code: 'uy',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fa-1f1ff.svg',
    name: 'Uzbekistan',
    code: 'uz',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fb-1f1e6.svg',
    name: 'Vatican City',
    code: 'va',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fb-1f1e8.svg',
    name: 'St. Vincent & Grenadines',
    code: 'vc',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fb-1f1ea.svg',
    name: 'Venezuela',
    code: 've',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fb-1f1ec.svg',
    name: 'British Virgin Islands',
    code: 'vg',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fb-1f1ee.svg',
    name: 'U.S. Virgin Islands',
    code: 'vi',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fb-1f1f3.svg',
    name: 'Vietnam',
    code: 'vn',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fb-1f1fa.svg',
    name: 'Vanuatu',
    code: 'vu',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fc-1f1eb.svg',
    name: 'Wallis & Futuna',
    code: 'wf',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fc-1f1f8.svg',
    name: 'Samoa',
    code: 'ws',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fd-1f1f0.svg',
    name: 'Kosovo',
    code: 'xk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fe-1f1ea.svg',
    name: 'Yemen',
    code: 'ye',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1fe-1f1f9.svg',
    name: 'Mayotte',
    code: 'yt',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ff-1f1e6.svg',
    name: 'South Africa',
    code: 'za',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ff-1f1f2.svg',
    name: 'Zambia',
    code: 'zm',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ff-1f1fc.svg',
    name: 'Zimbabwe',
    code: 'zw',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.svg',
    name: 'England',
    code: 'uk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.svg',
    name: 'Scotland',
    code: 'uk',
  },
  {
    flag: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.svg',
    name: 'Wales',
    code: 'uk',
  },
];

countries.forEach((country) => {
  let filename = country.name
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
  console.log(`{flag: '/img/flags/${filename}.svg', name: '${country.name}'},`);

  const file = fs.createWriteStream(`${filename}.svg`);
  const request = https.get(country.flag, function (response) {
    response.pipe(file);

    // after download completed close filestream
    file.on('finish', () => {
      file.close();
      // console.log(`Downloaded flag for ${country.name}`);
    });
  });
});
