import { IEducation } from './education.interface';

export const ParklandEdu: IEducation = {
  achievements: [
    'Graduated with a 4.0+ GPA',
    'Member of the National Honor Society',
    'Member of the National English Honor Society',
  ],
  athletics: [
    {
      name: 'Track & Field',
      achievements: [
        'Voted team MVP senior season',
        '3 year varisity letter winner',
      ],
      positions: [
        '300m Hurdles',
        '400m Run',
        '800m Run',
        '4x400m Relay',
        '4x800m Relay',
      ],
      years: 'Sophomore, Junior, & Senior Years',
    }
  ],
  extraCirriculars: [],
  link: 'https://www.parklandsd.org/',
  location: 'Allentown, PA',
  logo: 'assets/logos/parkland.png',
  name: 'Parkland High School',
  key: 'parkland',
  startDate: 'September 2011',
  endDate: 'June 2015',
}