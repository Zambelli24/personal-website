import { IEducation } from './education.interface';

export const MoravianEdu: IEducation = {
  achievements: [
    '4.0 GPA, BS in Computer Science, major in Economics and a minor in Mathematics',
    'Valedictorian for the class of 2019',
    'Charles A. Albrecht Memorial Award',
    'Edwin L. Stockton Prize in Economics and Business',
    'Dean\'s List (all semesters)',
  ],
  athletics: [
    {
      name: 'Football',
      achievements: [
        'Team Captain - junior & senior seasons',
        'Academic All-American 1st team (2017, 2018)',
        'Centennial Conference Scholar-Athlete of the Year (2017)',
        'Male Scholar Athlete of the Year for Moravian College (2018)',
        'William V. Campbell Trophy Semifinalist (2018)',
        '4 year starter recording 218 tackles, 8 interceptions and 2 forced fumbles',
      ],
      positions: 'Safety & Outside Linebacker',
      years: 'Freshman, Sophomore, Junior, & Senior Years',
    }
  ],
  extraCirriculars: [
    {
      description: 'Omicron Gamma Omega (OGO)',
      details: [
        'Vice President (4 semesters)',
        'Helped organize and run events for the fraternity',
        'Academic Chair (2 semesters)',
        'Contributed to 10% increase in fraternity GPA',
        '4 year member',
      ],
    },
    {
      description: 'CRLA Certified Tutor',
      details: [
        'Certified in Computer Science, Economics, and Mathematics',
        'Dedicated 4-10 hours per week to tutoring',
        'Assisted general student body in addition to teammates and fraternity brothers',
      ],
    },
    {
      description: 'Senior Class Gift Committee Member',
      details: [
        'Organized and run celebratory events for the senior class',
        'Raised money for the senior class gift',
      ]
    }
  ],
  link: 'https://www.moravian.edu/',
  location: 'Bethlehem, PA',
  logo: 'assets/logos/moravian.png',
  name: 'Moravian University',
  key: 'moravian',
  photos: [
    'assets/personal-photos/football.jpg',
  ],
  startDate: 'September 2015',
  endDate: 'May 2019',
}