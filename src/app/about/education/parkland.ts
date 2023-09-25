import { IEducation } from './education.interface';

export const ParklandEdu: IEducation = {
  achievements: [
    'Graduated with a 4.0+ GPA',
    'Graduated top 50 in a class of 750 students',
    'Member of the National Honor Society',
    'Member of the National English Honor Society',
  ],
  athletics: [
    {
      name: 'Football',
      achievements: [
        '3x District XI Champions',
        '3 year varisity letter winner',
        '2 year starter at Safety',
      ],
      positions: 'Safety, Wide Receiver & Quarterback',
      years: 'Freshman, Sophomore, Junior, & Senior Years',
    },
    {
      name: 'Track & Field',
      achievements: [
        'Voted team MVP senior season',
        '3 year varisity letter winner',
      ],
      positions: '300m Hurdles, 400m Run, 800m Run, 4x400m Relay, & 4x800m Relay',
      years: 'Sophomore, Junior, & Senior Years',
    },
  ],
  extraCirriculars: [],
  link: 'https://www.parklandsd.org/',
  location: 'Allentown, PA',
  logo: 'assets/logos/parkland.png',
  name: 'Parkland High School',
  key: 'parkland',
  photos: [],
  startDate: 'September 2011',
  endDate: 'June 2015',
}