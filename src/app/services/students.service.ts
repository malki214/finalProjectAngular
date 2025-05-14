import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  studentsList = [
    {
      "name": "Chava Cohen",
      "phone": "054-1234567",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "name": "Miriam Friedman",
      "phone": "052-7654321",
      "lessonName": "Pilates",
      "paid": false
    },
    {
      "name": "Esther Levi",
      "phone": "053-9876543",
      "lessonName": "Zumba",
      "paid": true
    },
    {
      "name": "Rachel Schwartz",
      "phone": "050-1234567",
      "lessonName": "Strength Training",
      "paid": false
    },
    {
      "name": "Tova Green",
      "phone": "054-2345678",
      "lessonName": "Functional Training",
      "paid": true
    },
    {
      "name": "Dina Cohen",
      "phone": "052-3456789",
      "lessonName": "Endurance Training",
      "paid": false
    },
    {
      "name": "Miriam Katz",
      "phone": "053-4567890",
      "lessonName": "Advanced Yoga",
      "paid": true
    },
    {
      "name": "Esther Rosen",
      "phone": "050-5678901",
      "lessonName": "Kids Zumba",
      "paid": false
    },
    {
      "name": "Rachel Friedman",
      "phone": "054-6789012",
      "lessonName": "Advanced Pilates",
      "paid": true
    },
    {
      "name": "Chaya Levy",
      "phone": "052-7890123",
      "lessonName": "Dance Fitness",
      "paid": false
    },
    {
      "name": "Sara Cohen",
      "phone": "053-8901234",
      "lessonName": "Meditation",
      "paid": true
    },
    {
      "name": "Hannah Schwartz",
      "phone": "050-9012345",
      "lessonName": "Stretch and Flex",
      "paid": false
    },
    {
      "name": "Leah Green",
      "phone": "054-0123456",
      "lessonName": "Boxing",
      "paid": true
    },
    {
      "name": "Rivka Katz",
      "phone": "052-1234568",
      "lessonName": "HIIT Training",
      "paid": false
    },
    {
      "name": "Naomi Friedman",
      "phone": "053-2345679",
      "lessonName": "Core Training",
      "paid": true
    },
    {
      "name": "Esther Gold",
      "phone": "050-3456780",
      "lessonName": "Agility Training",
      "paid": false
    },
    {
      "name": "Miriam Silver",
      "phone": "054-4567891",
      "lessonName": "Vinyasa Yoga",
      "paid": true
    },
    {
      "name": "Shoshana Cohen",
      "phone": "052-5678902",
      "lessonName": "Balance Training",
      "paid": false
    },
    {
      "name": "Dina Green",
      "phone": "053-6789013",
      "lessonName": "Self-Defense",
      "paid": true
    },
    {
      "name": "Chava Schwartz",
      "phone": "050-7890124",
      "lessonName": "Reformer Pilates",
      "paid": false
    },
    {
      "name": "Miriam Levi",
      "phone": "054-8901235",
      "lessonName": "Zumba Gold",
      "paid": true
    },
    {
      "name": "Rachel Green",
      "phone": "052-9012346",
      "lessonName": "Yoga for Beginners",
      "paid": false
    },
    {
      "name": "Esther Katz",
      "phone": "053-0123457",
      "lessonName": "Mobility Training",
      "paid": true
    },
    {
      "name": "Leah Rosen",
      "phone": "050-1234569",
      "lessonName": "Dance Fitness",
      "paid": false
    },
    {
      "name": "Hannah Green",
      "phone": "054-2345670",
      "lessonName": "Kickboxing",
      "paid": true
    },
    {
      "name": "Tova Cohen",
      "phone": "052-3456781",
      "lessonName": "Yoga",
      "paid": false
    },
    {
      "name": "Miriam Gold",
      "phone": "053-4567892",
      "lessonName": "Functional Training",
      "paid": true
    },
    {
      "name": "Esther Silver",
      "phone": "050-5678903",
      "lessonName": "Advanced Pilates",
      "paid": false
    },
    {
      "name": "Rachel Katz",
      "phone": "054-6789014",
      "lessonName": "Endurance Training",
      "paid": true
    },
    {
      "name": "Chaya Green",
      "phone": "052-7890125",
      "lessonName": "Zumba",
      "paid": false
    },
    {
      "name": "Sara Cohen",
      "phone": "053-8901236",
      "lessonName": "Boxing",
      "paid": true
    },
    {
      "name": "Naomi Schwartz",
      "phone": "050-9012347",
      "lessonName": "Meditation",
      "paid": false
    },
    {
      "name": "Hannah Levi",
      "phone": "054-0123458",
      "lessonName": "HIIT Training",
      "paid": true
    },
    {
      "name": "Leah Gold",
      "phone": "052-1234560",
      "lessonName": "Core Training",
      "paid": false
    },
    {
      "name": "Miriam Green",
      "phone": "053-2345671",
      "lessonName": "Agility Training",
      "paid": true
    },
    {
      "name": "Esther Katz",
      "phone": "050-3456782",
      "lessonName": "Vinyasa Yoga",
      "paid": false
    },
    {
      "name": "Rachel Silver",
      "phone": "054-4567893",
      "lessonName": "Balance Training",
      "paid": true
    },
    {
      "name": "Chava Green",
      "phone": "052-5678904",
      "lessonName": "Self-Defense",
      "paid": false
    },
    {
      "name": "Miriam Friedman",
      "phone": "053-6789015",
      "lessonName": "Reformer Pilates",
      "paid": true
    },
    {
      "name": "Esther Cohen",
      "phone": "050-7890126",
      "lessonName": "Zumba Gold",
      "paid": false
    },
    {
      "name": "Rachel Katz",
      "phone": "054-8901237",
      "lessonName": "Yoga for Beginners",
      "paid": true
    },
    {
      "name": "Tova Green",
      "phone": "052-9012348",
      "lessonName": "Mobility Training",
      "paid": false
    },
    {
      "name": "Dina Schwartz",
      "phone": "053-0123459",
      "lessonName": "Dance Fitness",
      "paid": true
    },
    {
      "name": "Chaya Rosen",
      "phone": "050-1234570",
      "lessonName": "Kickboxing",
      "paid": false
    },
    {
      "name": "Miriam Cohen",
      "phone": "054-2345672",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "name": "Esther Green",
      "phone": "052-3456783",
      "lessonName": "Functional Training",
      "paid": false
    },
    {
      "name": "Rachel Silver",
      "phone": "053-4567894",
      "lessonName": "Advanced Pilates",
      "paid": true
    },
    {
      "name": "Chava Katz",
      "phone": "050-5678905",
      "lessonName": "Endurance Training",
      "paid": false
    },
    {
      "name": "Tova Friedman",
      "phone": "054-6789016",
      "lessonName": "Zumba",
      "paid": true
    },
    {
      "name": "Naomi Green",
      "phone": "052-7890129",
      "lessonName": "Boxing",
      "paid": false
    },
    {
      "name": "Hannah Silver",
      "phone": "053-8901238",
      "lessonName": "Meditation",
      "paid": true
    },
    {
      "name": "Leah Katz",
      "phone": "050-9012349",
      "lessonName": "HIIT Training",
      "paid": false
    },
    {
      "name": "Miriam Green",
      "phone": "054-0123460",
      "lessonName": "Core Training",
      "paid": true
    },
    {
      "name": "Esther Cohen",
      "phone": "052-1234571",
      "lessonName": "Agility Training",
      "paid": false
    },
    {
      "name": "Rachel Gold",
      "phone": "053-2345673",
      "lessonName": "Vinyasa Yoga",
      "paid": true
    },
    {
      "name": "Chava Silver",
      "phone": "050-3456784",
      "lessonName": "Balance Training",
      "paid": false
    },
    {
      "name": "Miriam Green",
      "phone": "054-4567895",
      "lessonName": "Self-Defense",
      "paid": true
    },
    {
      "name": "Esther Katz",
      "phone": "052-5678906",
      "lessonName": "Reformer Pilates",
      "paid": false
    },
    {
      "name": "Rachel Silver",
      "phone": "053-6789017",
      "lessonName": "Zumba Gold",
      "paid": true
    },
    {
      "name": "Chava Cohen",
      "phone": "050-7890127",
      "lessonName": "Yoga for Beginners",
      "paid": false
    },
    {
      "name": "Miriam Katz",
      "phone": "054-8901239",
      "lessonName": "Mobility Training",
      "paid": true
    },
    {
      "name": "Tova Green",
      "phone": "052-9012350",
      "lessonName": "Dance Fitness",
      "paid": false
    },
    {
      "name": "Dina Schwartz",
      "phone": "053-0123461",
      "lessonName": "Kickboxing",
      "paid": true
    },
    {
      "name": "Chaya Rosen",
      "phone": "050-1234572",
      "lessonName": "Yoga",
      "paid": false
    },
    {
      "name": "Miriam Cohen",
      "phone": "054-2345674",
      "lessonName": "Functional Training",
      "paid": true
    },
    {
      "name": "Esther Green",
      "phone": "052-3456785",
      "lessonName": "Advanced Pilates",
      "paid": false
    },
    {
      "name": "Rachel Silver",
      "phone": "053-4567896",
      "lessonName": "Endurance Training",
      "paid": true
    },
    {
      "name": "Chava Katz",
      "phone": "050-5678907",
      "lessonName": "Zumba",
      "paid": false
    },
    {
      "name": "Tova Friedman",
      "phone": "054-6789018",
      "lessonName": "Boxing",
      "paid": true
    },
    {
      "name": "Naomi Green",
      "phone": "052-7890130",
      "lessonName": "Meditation",
      "paid": false
    },
    {
      "name": "Hannah Silver",
      "phone": "053-8901240",
      "lessonName": "HIIT Training",
      "paid": true
    },
    {
      "name": "Leah Gold",
      "phone": "050-9012351",
      "lessonName": "Core Training",
      "paid": false
    },
    {
      "name": "Miriam Green",
      "phone": "054-0123462",
      "lessonName": "Agility Training",
      "paid": true
    },
    {
      "name": "Esther Cohen",
      "phone": "052-1234573",
      "lessonName": "Vinyasa Yoga",
      "paid": false
    },
    {
      "name": "Rachel Gold",
      "phone": "053-2345675",
      "lessonName": "Balance Training",
      "paid": true
    },
    {
      "name": "Chava Silver",
      "phone": "050-3456786",
      "lessonName": "Self-Defense",
      "paid": false
    },
    {
      "name": "Miriam Green",
      "phone": "054-4567897",
      "lessonName": "Reformer Pilates",
      "paid": true
    },
    {
      "name": "Esther Katz",
      "phone": "052-5678908",
      "lessonName": "Zumba Gold",
      "paid": false
    },
    {
      "name": "Rachel Silver",
      "phone": "053-6789019",
      "lessonName": "Yoga for Beginners",
      "paid": true
    },
    {
      "name": "Chava Cohen",
      "phone": "050-7890120",
      "lessonName": "Mobility Training",
      "paid": false
    },
    {
      "name": "Tova Green",
      "phone": "054-8901241",
      "lessonName": "Dance Fitness",
      "paid": true
    },
    {
      "name": "Dina Schwartz",
      "phone": "052-9012352",
      "lessonName": "Kickboxing",
      "paid": false
    },
    {
      "name": "Chaya Rosen",
      "phone": "053-0123463",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "name": "Miriam Cohen",
      "phone": "050-1234574",
      "lessonName": "Functional Training",
      "paid": false
    },
    {
      "name": "Esther Green",
      "phone": "054-2345676",
      "lessonName": "Advanced Pilates",
      "paid": true
    },
    {
      "name": "Rachel Silver",
      "phone": "052-3456789",
      "lessonName": "Endurance Training",
      "paid": false
    }
  ]
  getStudents(){
    return this.studentsList;
  }
}
