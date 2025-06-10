import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  private studentsList = [
    {
      "id": "10000001",
      "name": "Chava Cohen",
      "phone": "054-1234567",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "id": "10000002",
      "name": "Miriam Friedman",
      "phone": "052-7654321",
      "lessonName": "Pilates",
      "paid": false
    },
    {
      "id": "10000003",
      "name": "Esther Levi",
      "phone": "053-9876543",
      "lessonName": "Zumba",
      "paid": true
    },
    {
      "id": "10000004",
      "name": "Rachel Schwartz",
      "phone": "050-1234567",
      "lessonName": "Strength Training",
      "paid": false
    },
    {
      "id": "10000005",
      "name": "Tova Green",
      "phone": "054-2345678",
      "lessonName": "Functional Training",
      "paid": true
    },
    {
      "id": "10000006",
      "name": "Dina Cohen",
      "phone": "052-3456789",
      "lessonName": "Endurance Training",
      "paid": false
    },
    {
      "id": "10000007",
      "name": "Miriam Katz",
      "phone": "053-4567890",
      "lessonName": "Advanced Yoga",
      "paid": true
    },
    {
      "id": "10000008",
      "name": "Esther Rosen",
      "phone": "050-5678901",
      "lessonName": "Kids Zumba",
      "paid": false
    },
    {
      "id": "10000009",
      "name": "Rachel Friedman",
      "phone": "054-6789012",
      "lessonName": "Advanced Pilates",
      "paid": true
    },
    {
      "id": "10000010",
      "name": "Chaya Levy",
      "phone": "052-7890123",
      "lessonName": "Dance Fitness",
      "paid": false
    },
    {
      "id": "10000011",
      "name": "Sara Cohen",
      "phone": "053-8901234",
      "lessonName": "Meditation",
      "paid": true
    },
    {
      "id": "10000012",
      "name": "Hannah Schwartz",
      "phone": "050-9012345",
      "lessonName": "Stretch and Flex",
      "paid": false
    },
    {
      "id": "10000013",
      "name": "Leah Green",
      "phone": "054-0123456",
      "lessonName": "Boxing",
      "paid": true
    },
    {
      "id": "10000014",
      "name": "Rivka Katz",
      "phone": "052-1234568",
      "lessonName": "HIIT Training",
      "paid": false
    },
    {
      "id": "10000015",
      "name": "Naomi Friedman",
      "phone": "053-2345679",
      "lessonName": "Core Training",
      "paid": true
    },
    {
      "id": "10000016",
      "name": "Esther Gold",
      "phone": "050-3456780",
      "lessonName": "Agility Training",
      "paid": false
    },
    {
      "id": "10000017",
      "name": "Miriam Silver",
      "phone": "054-4567891",
      "lessonName": "Vinyasa Yoga",
      "paid": true
    },
    {
      "id": "10000018",
      "name": "Shoshana Cohen",
      "phone": "052-5678902",
      "lessonName": "Balance Training",
      "paid": false
    },
    {
      "id": "10000019",
      "name": "Dina Green",
      "phone": "053-6789013",
      "lessonName": "Self-Defense",
      "paid": true
    },
    {
      "id": "10000020",
      "name": "Chava Schwartz",
      "phone": "050-7890124",
      "lessonName": "Reformer Pilates",
      "paid": false
    },
    {
      "id": "10000021",
      "name": "Miriam Levi",
      "phone": "054-8901235",
      "lessonName": "Zumba Gold",
      "paid": true
    },
    {
      "id": "10000022",
      "name": "Rachel Green",
      "phone": "052-9012346",
      "lessonName": "Yoga for Beginners",
      "paid": false
    },
    {
      "id": "10000023",
      "name": "Esther Katz",
      "phone": "053-0123457",
      "lessonName": "Mobility Training",
      "paid": true
    },
    {
      "id": "10000024",
      "name": "Leah Rosen",
      "phone": "050-1234569",
      "lessonName": "Dance Fitness",
      "paid": false
    },
    {
      "id": "10000025",
      "name": "Hannah Green",
      "phone": "054-2345670",
      "lessonName": "Kickboxing",
      "paid": true
    },
    {
      "id": "10000026",
      "name": "Tova Cohen",
      "phone": "052-3456781",
      "lessonName": "Yoga",
      "paid": false
    },
    {
      "id": "10000027",
      "name": "Miriam Gold",
      "phone": "053-4567892",
      "lessonName": "Functional Training",
      "paid": true
    },
    {
      "id": "10000028",
      "name": "Esther Silver",
      "phone": "050-5678903",
      "lessonName": "Advanced Pilates",
      "paid": false
    },
    {
      "id": "10000029",
      "name": "Rachel Katz",
      "phone": "054-6789014",
      "lessonName": "Endurance Training",
      "paid": true
    },
    {
      "id": "10000030",
      "name": "Chaya Green",
      "phone": "052-7890125",
      "lessonName": "Zumba",
      "paid": false
    },
    {
      "id": "10000031",
      "name": "Sara Cohen",
      "phone": "053-8901236",
      "lessonName": "Boxing",
      "paid": true
    },
    {
      "id": "10000032",
      "name": "Naomi Schwartz",
      "phone": "050-9012347",
      "lessonName": "Meditation",
      "paid": false
    },
    {
      "id": "10000033",
      "name": "Hannah Levi",
      "phone": "054-0123458",
      "lessonName": "HIIT Training",
      "paid": true
    },
    {
      "id": "10000034",
      "name": "Leah Gold",
      "phone": "052-1234560",
      "lessonName": "Core Training",
      "paid": false
    },
    {
      "id": "10000035",
      "name": "Miriam Green",
      "phone": "053-2345671",
      "lessonName": "Agility Training",
      "paid": true
    },
    {
      "id": "10000036",
      "name": "Esther Katz",
      "phone": "050-3456782",
      "lessonName": "Vinyasa Yoga",
      "paid": false
    },
    {
      "id": "10000037",
      "name": "Rachel Silver",
      "phone": "054-4567893",
      "lessonName": "Balance Training",
      "paid": true
    },
    {
      "id": "10000038",
      "name": "Chava Green",
      "phone": "052-5678904",
      "lessonName": "Self-Defense",
      "paid": false
    },
    {
      "id": "10000039",
      "name": "Miriam Friedman",
      "phone": "053-6789015",
      "lessonName": "Reformer Pilates",
      "paid": true
    },
    {
      "id": "10000040",
      "name": "Esther Cohen",
      "phone": "050-7890126",
      "lessonName": "Zumba Gold",
      "paid": false
    },
    {
      "id": "10000041",
      "name": "Rachel Katz",
      "phone": "054-8901237",
      "lessonName": "Yoga for Beginners",
      "paid": true
    },
    {
      "id": "10000042",
      "name": "Tova Green",
      "phone": "052-9012348",
      "lessonName": "Mobility Training",
      "paid": false
    },
    {
      "id": "10000043",
      "name": "Dina Schwartz",
      "phone": "053-0123459",
      "lessonName": "Dance Fitness",
      "paid": true
    },
    {
      "id": "10000044",
      "name": "Chaya Rosen",
      "phone": "050-1234570",
      "lessonName": "Kickboxing",
      "paid": false
    },
    {
      "id": "10000045",
      "name": "Miriam Cohen",
      "phone": "054-2345672",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "id": "10000046",
      "name": "Esther Green",
      "phone": "052-3456783",
      "lessonName": "Functional Training",
      "paid": false
    },
    {
      "id": "10000047",
      "name": "Rachel Silver",
      "phone": "053-4567894",
      "lessonName": "Advanced Pilates",
      "paid": true
    },
    {
      "id": "10000048",
      "name": "Chava Katz",
      "phone": "050-5678905",
      "lessonName": "Endurance Training",
      "paid": false
    },
    {
      "id": "10000049",
      "name": "Tova Friedman",
      "phone": "054-6789016",
      "lessonName": "Zumba",
      "paid": true
    },
    {
      "id": "10000050",
      "name": "Naomi Green",
      "phone": "052-7890129",
      "lessonName": "Boxing",
      "paid": false
    },
    {
      "id": "10000051",
      "name": "Hannah Silver",
      "phone": "053-8901238",
      "lessonName": "Meditation",
      "paid": true
    },
    {
      "id": "10000052",
      "name": "Leah Katz",
      "phone": "050-9012349",
      "lessonName": "HIIT Training",
      "paid": false
    },
    {
      "id": "10000053",
      "name": "Miriam Green",
      "phone": "054-0123460",
      "lessonName": "Core Training",
      "paid": true
    },
    {
      "id": "10000054",
      "name": "Esther Cohen",
      "phone": "052-1234571",
      "lessonName": "Agility Training",
      "paid": false
    },
    {
      "id": "10000055",
      "name": "Rachel Gold",
      "phone": "053-2345673",
      "lessonName": "Vinyasa Yoga",
      "paid": true
    },
    {
      "id": "10000056",
      "name": "Chava Silver",
      "phone": "050-3456784",
      "lessonName": "Balance Training",
      "paid": false
    },
    {
      "id": "10000057",
      "name": "Miriam Green",
      "phone": "054-4567895",
      "lessonName": "Self-Defense",
      "paid": true
    },
    {
      "id": "10000058",
      "name": "Esther Katz",
      "phone": "052-5678906",
      "lessonName": "Reformer Pilates",
      "paid": false
    },
    {
      "id": "10000059",
      "name": "Rachel Silver",
      "phone": "053-6789017",
      "lessonName": "Zumba Gold",
      "paid": true
    },
    {
      "id": "10000060",
      "name": "Chava Cohen",
      "phone": "050-7890127",
      "lessonName": "Yoga for Beginners",
      "paid": false
    },
    {
      "id": "10000061",
      "name": "Miriam Katz",
      "phone": "054-8901239",
      "lessonName": "Mobility Training",
      "paid": true
    },
    {
      "id": "10000062",
      "name": "Tova Green",
      "phone": "052-9012350",
      "lessonName": "Dance Fitness",
      "paid": false
    },
    {
      "id": "10000063",
      "name": "Dina Schwartz",
      "phone": "053-0123461",
      "lessonName": "Kickboxing",
      "paid": true
    },
    {
      "id": "10000064",
      "name": "Chaya Rosen",
      "phone": "050-1234572",
      "lessonName": "Yoga",
      "paid": false
    },
    {
      "id": "10000065",
      "name": "Miriam Cohen",
      "phone": "054-2345674",
      "lessonName": "Functional Training",
      "paid": true
    },
    {
      "id": "10000066",
      "name": "Esther Green",
      "phone": "052-3456785",
      "lessonName": "Advanced Pilates",
      "paid": false
    },
    {
      "id": "10000067",
      "name": "Rachel Silver",
      "phone": "053-4567896",
      "lessonName": "Endurance Training",
      "paid": true
    },
    {
      "id": "10000068",
      "name": "Chava Katz",
      "phone": "050-5678907",
      "lessonName": "Zumba",
      "paid": false
    },
    {
      "id": "10000069",
      "name": "Tova Friedman",
      "phone": "054-6789018",
      "lessonName": "Boxing",
      "paid": true
    },
    {
      "id": "10000070",
      "name": "Naomi Green",
      "phone": "052-7890130",
      "lessonName": "Meditation",
      "paid": false
    },
    {
      "id": "10000071",
      "name": "Hannah Silver",
      "phone": "053-8901240",
      "lessonName": "HIIT Training",
      "paid": true
    },
    {
      "id": "10000072",
      "name": "Leah Gold",
      "phone": "050-9012351",
      "lessonName": "Core Training",
      "paid": false
    },
    {
      "id": "10000073",
      "name": "Miriam Green",
      "phone": "054-0123462",
      "lessonName": "Agility Training",
      "paid": true
    },
    {
      "id": "10000074",
      "name": "Esther Cohen",
      "phone": "052-1234573",
      "lessonName": "Vinyasa Yoga",
      "paid": false
    },
    {
      "id": "10000075",
      "name": "Rachel Gold",
      "phone": "053-2345675",
      "lessonName": "Balance Training",
      "paid": true
    },
    {
      "id": "10000076",
      "name": "Chava Silver",
      "phone": "050-3456786",
      "lessonName": "Self-Defense",
      "paid": false
    },
    {
      "id": "10000077",
      "name": "Miriam Green",
      "phone": "054-4567897",
      "lessonName": "Reformer Pilates",
      "paid": true
    },
    {
      "id": "10000078",
      "name": "Esther Katz",
      "phone": "052-5678908",
      "lessonName": "Zumba Gold",
      "paid": false
    },
    {
      "id": "10000079",
      "name": "Rachel Silver",
      "phone": "053-6789019",
      "lessonName": "Yoga for Beginners",
      "paid": true
    },
    {
      "id": "10000080",
      "name": "Chava Cohen",
      "phone": "050-7890120",
      "lessonName": "Mobility Training",
      "paid": false
    },
    {
      "id": "10000081",
      "name": "Tova Green",
      "phone": "054-8901241",
      "lessonName": "Dance Fitness",
      "paid": true
    },
    {
      "id": "10000082",
      "name": "Dina Schwartz",
      "phone": "052-9012352",
      "lessonName": "Kickboxing",
      "paid": false
    },
    {
      "id": "10000083",
      "name": "Chaya Rosen",
      "phone": "053-0123463",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "id": "10000084",
      "name": "Miriam Cohen",
      "phone": "050-1234574",
      "lessonName": "Functional Training",
      "paid": false
    },
    {
      "id": "10000085",
      "name": "Esther Green",
      "phone": "054-2345676",
      "lessonName": "Advanced Pilates",
      "paid": true
    },
    {
      "id": "10000086",
      "name": "Rachel Silver",
      "phone": "052-3456789",
      "lessonName": "Endurance Training",
      "paid": false
    },
    {
      "id": "10000087",
      "name": "Chaya Rosen",
      "phone": "053-0123463",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "id": "10000088",
      "name": "Rivka Cohen",
      "phone": "054-2345678",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "id": "10000089",
      "name": "Shoshana Friedman",
      "phone": "052-3456789",
      "lessonName": "Yoga",
      "paid": false
    },
    {
      "id": "10000090",
      "name": "Leah Schwartz",
      "phone": "053-4567890",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "id": "10000091",
      "name": "Esther Katz",
      "phone": "050-5678901",
      "lessonName": "Yoga",
      "paid": false
    },
    {
      "id": "10000092",
      "name": "Miriam Levy",
      "phone": "054-6789012",
      "lessonName": "Yoga",
      "paid": true
    },
    {
      "id": "10000093",
      "name": "Chaya Gold",
      "phone": "052-7890123",
      "lessonName": "Yoga",
      "paid": false
    },
    {
      "id": "10000094",
      "name": "Naomi Rosen",
      "phone": "053-8901234",
      "lessonName": "Pilates",
      "paid": true
    },
    {
      "id": "10000095",
      "name": "Dina Silver",
      "phone": "050-9012345",
      "lessonName": "Pilates",
      "paid": false
    },
    {
      "id": "10000096",
      "name": "Hannah Green",
      "phone": "054-0123456",
      "lessonName": "Pilates",
      "paid": true
    },
    {
      "id": "10000097",
      "name": "Tova Katz",
      "phone": "052-1234567",
      "lessonName": "Pilates",
      "paid": false
    },
    {
      "id": "10000098",
      "name": "Rivka Green",
      "phone": "053-2345678",
      "lessonName": "Pilates",
      "paid": true
    },
    {
      "id": "10000099",
      "name": "Naomi Cohen",
      "phone": "054-2345679",
      "lessonName": "Pilates",
      "paid": true
    },
    {
      "id": "10000100",
      "name": "Rivka Green",
      "phone": "052-3456780",
      "lessonName": "Pilates",
      "paid": false
    },
    {
      "id": "10000101",
      "name": "Miriam Katz",
      "phone": "053-4567891",
      "lessonName": "Pilates",
      "paid": true
    },
    {
      "id": "10000102",
      "name": "Esther Silver",
      "phone": "050-5678902",
      "lessonName": "Pilates",
      "paid": false
    },
];

  private studentsListSubject = new BehaviorSubject<any[]>(this.studentsList);
  getStudents(){
    return this.studentsListSubject.asObservable();
  }

  addStudent(new_sing:any){
    this.studentsList.push({ id: (parseInt(this.studentsList[this.studentsList.length -1].id) + 1).toString() ,...new_sing})
    this.studentsListSubject.next(this.studentsList); 
    console.log(new_sing);  
  }
}
