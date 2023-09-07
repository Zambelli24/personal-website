import { IEducation } from './education.interface';

export const MoravianEdu: IEducation = {
  achievements: [
    'Graduated with a 4.0 GPA, BS in Computer Science, major in Economics and a minor in Mathematics',
    'Earned the honor of Valedictorian for the class of 2019',
    'Charles A. Albrecht Memorial Award - Senior with the best four year record in scholarship and effective participation in student activities.',
    'Edwin L. Stockton Prize in Economics and Business - The senior with the highest cumulative GPA in the Department of Economics and Business.',
    'Dean\'s List (all semesters)',
  ],
  athletics: [
    {
      name: 'Football',
      achievements: [
        'Team Captain for junior and senior seasons',
        '4 year starter for the Moravian football team recording 200+ tackles and 8 interceptions',
        'Academic All-American 1st team (2017, 2018)',
        'Centennial Conference Scholar-Athlete of the Year (2017)',
        'Male Scholar Athlete of the Year for Moravian College (2018)',
        'William V. Campbell Trophy Semifinalist (2018)',
      ],
      positions: 'Safety & Outside Linebacker',
      years: 'Freshman, Sophomore, Junior, & Senior Years',
    }
  ],
  extraCirriculars: [
    {
      description: 'Omicon Gamma Omega (OGO)',
      details: [
        'Held Vice President position for 4 semesters',
        'Helped organize and run events for the fraternity',
        'Held the Academic Chair position for 2 semesters',
        'Contributed to 10% increase in fraternity GPA',
        'Member all 4 years',
      ],
    },
    {
      description: 'CRLA Certified Tutor',
      details: [
        'Tutored students in Computer Science, Economics, and Mathematics',
        'Helped students with homework, projects, and test preparation',
        'Dedicated 4-10 hours per week to tutoring',
        'Helped teammates and fraternity brothers in addition to general student body',
      ],
    },
    {
      description: 'Senior Class Gift Committee Member',
      details: [
        'Helped organize and run celebratory events for the senior class',
        'Helped raise money for the senior class gift',
      ]
    }
  ],
  link: 'https://www.moravian.edu/',
  location: 'Bethlehem, PA',
  logo: 'assets/logos/moravian.png',
  name: 'Moravian University',
  key: 'moravian',
  startDate: 'September 2015',
  endDate: 'May 2019',
}