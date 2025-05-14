import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor() { }

  lessons = [
    {
        "id": 1,
        "className": "Strength Training",
        "teacherName": "Dina Cohen",
        "numberOfSessions": 10,
        "startDate": "2023-11-01",
        "price": 200,
        "dayOfWeek": "Sunday",
        "time": "18:00"
    },
    {
        "id": 2,
        "className": "Yoga",
        "teacherName": "Miriam Katz",
        "numberOfSessions": 8,
        "startDate": "2023-10-25",
        "price": 160,
        "dayOfWeek": "Tuesday",
        "time": "17:00"
    },
    {
        "id": 3,
        "className": "Zumba",
        "teacherName": "Esther Rosen",
        "numberOfSessions": 12,
        "startDate": "2023-11-15",
        "price": 240,
        "dayOfWeek": "Thursday",
        "time": "19:00"
    },
    {
        "id": 4,
        "className": "Functional Training",
        "teacherName": "Tova Green",
        "numberOfSessions": 6,
        "startDate": "2023-10-30",
        "price": 120,
        "dayOfWeek": "Monday",
        "time": "20:00"
    },
    {
        "id": 5,
        "className": "Pilates",
        "teacherName": "Rachel Friedman",
        "numberOfSessions": 10,
        "startDate": "2023-11-05",
        "price": 200,
        "dayOfWeek": "Wednesday",
        "time": "16:00"
    },
    {
        "id": 6,
        "className": "Endurance Training",
        "teacherName": "Dina Cohen",
        "numberOfSessions": 10,
        "startDate": "2023-11-08",
        "price": 220,
        "dayOfWeek": "Sunday",
        "time": "19:00"
    },
    {
        "id": 7,
        "className": "Advanced Yoga",
        "teacherName": "Miriam Katz",
        "numberOfSessions": 8,
        "startDate": "2023-11-12",
        "price": 180,
        "dayOfWeek": "Tuesday",
        "time": "18:00"
    },
    {
        "id": 8,
        "className": "Kids Zumba",
        "teacherName": "Esther Rosen",
        "numberOfSessions": 12,
        "startDate": "2023-11-20",
        "price": 250,
        "dayOfWeek": "Thursday",
        "time": "17:00"
    },
    {
        "id": 9,
        "className": "Advanced Functional Training",
        "teacherName": "Tova Green",
        "numberOfSessions": 6,
        "startDate": "2023-11-03",
        "price": 140,
        "dayOfWeek": "Monday",
        "time": "21:00"
    },
    {
        "id": 10,
        "className": "Advanced Pilates",
        "teacherName": "Rachel Friedman",
        "numberOfSessions": 10,
        "startDate": "2023-11-07",
        "price": 220,
        "dayOfWeek": "Wednesday",
        "time": "15:00"
    },
    {
        "id": 11,
        "className": "Kickboxing",
        "teacherName": "Dina Cohen",
        "numberOfSessions": 10,
        "startDate": "2023-11-10",
        "price": 210,
        "dayOfWeek": "Sunday",
        "time": "20:00"
    },
    {
        "id": 12,
        "className": "Meditation",
        "teacherName": "Miriam Katz",
        "numberOfSessions": 8,
        "startDate": "2023-11-14",
        "price": 150,
        "dayOfWeek": "Tuesday",
        "time": "19:00"
    },
    {
        "id": 13,
        "className": "Dance Fitness",
        "teacherName": "Esther Rosen",
        "numberOfSessions": 12,
        "startDate": "2023-11-18",
        "price": 230,
        "dayOfWeek": "Thursday",
        "time": "16:30"
    },
    {
        "id": 14,
        "className": "Core Training",
        "teacherName": "Tova Green",
        "numberOfSessions": 6,
        "startDate": "2023-11-02",
        "price": 130,
        "dayOfWeek": "Monday",
        "time": "19:30"
    },
    {
        "id": 15,
        "className": "Stretch and Flex",
        "teacherName": "Rachel Friedman",
        "numberOfSessions": 10,
        "startDate": "2023-11-04",
        "price": 190,
        "dayOfWeek": "Wednesday",
        "time": "14:00"
    },
    {
        "id": 16,
        "className": "Boxing",
        "teacherName": "Dina Cohen",
        "numberOfSessions": 10,
        "startDate": "2023-11-09",
        "price": 200,
        "dayOfWeek": "Sunday",
        "time": "18:30"
    },
    {
        "id": 17,
        "className": "Restorative Yoga",
        "teacherName": "Miriam Katz",
        "numberOfSessions": 8,
        "startDate": "2023-11-11",
        "price": 170,
        "dayOfWeek": "Tuesday",
        "time": "17:30"
    },
    {
        "id": 18,
        "className": "Zumba Gold",
        "teacherName": "Esther Rosen",
        "numberOfSessions": 12,
        "startDate": "2023-11-16",
        "price": 240,
        "dayOfWeek": "Thursday",
        "time": "15:30"
    },
    {
        "id": 19,
        "className": "Agility Training",
        "teacherName": "Tova Green",
        "numberOfSessions": 6,
        "startDate": "2023-11-06",
        "price": 150,
        "dayOfWeek": "Monday",
        "time": "20:30"
    },
    {
        "id": 20,
        "className": "Balance Training",
        "teacherName": "Rachel Friedman",
        "numberOfSessions": 10,
        "startDate": "2023-11-13",
        "price": 210,
        "dayOfWeek": "Wednesday",
        "time": "15:30"
    },
    {
        "id": 21,
        "className": "HIIT Training",
        "teacherName": "Dina Cohen",
        "numberOfSessions": 10,
        "startDate": "2023-11-17",
        "price": 250,
        "dayOfWeek": "Sunday",
        "time": "19:30"
    },
    {
        "id": 22,
        "className": "Vinyasa Yoga",
        "teacherName": "Miriam Katz",
        "numberOfSessions": 8,
        "startDate": "2023-11-19",
        "price": 180,
        "dayOfWeek": "Tuesday",
        "time": "18:30"
    },
    {
        "id": 23,
        "className": "Aqua Zumba",
        "teacherName": "Esther Rosen",
        "numberOfSessions": 12,
        "startDate": "2023-11-21",
        "price": 260,
        "dayOfWeek": "Thursday",
        "time": "17:30"
    },
    {
        "id": 24,
        "className": "Mobility Training",
        "teacherName": "Tova Green",
        "numberOfSessions": 6,
        "startDate": "2023-11-23",
        "price": 140,
        "dayOfWeek": "Monday",
        "time": "19:00"
    },
    {
        "id": 25,
        "className": "Chair Pilates",
        "teacherName": "Rachel Friedman",
        "numberOfSessions": 10,
        "startDate": "2023-11-25",
        "price": 200,
        "dayOfWeek": "Wednesday",
        "time": "15:00"
    },
    {
        "id": 26,
        "className": "Self-Defense",
        "teacherName": "Dina Cohen",
        "numberOfSessions": 10,
        "startDate": "2023-11-29",
        "price": 220,
        "dayOfWeek": "Sunday",
        "time": "20:00"
    },
    {
        "id": 27,
        "className": "Yoga for Beginners",
        "teacherName": "Miriam Katz",
        "numberOfSessions": 8,
        "startDate": "2023-11-30",
        "price": 160,
        "dayOfWeek": "Tuesday",
        "time": "17:00"
    },
    {
        "id": 28,
        "className": "Zumba for Seniors",
        "teacherName": "Esther Rosen",
        "numberOfSessions": 12,
        "startDate": "2023-12-01",
        "price": 240,
        "dayOfWeek": "Thursday",
        "time": "19:00"
    },
    {
        "id": 29,
        "className": "Functional Movement",
        "teacherName": "Tova Green",
        "numberOfSessions": 6,
        "startDate": "2023-12-02",
        "price": 130,
        "dayOfWeek": "Monday",
        "time": "20:30"
    },
    {
        "id": 30,
        "className": "Reformer Pilates",
        "teacherName": "Rachel Friedman",
        "numberOfSessions": 10,
        "startDate": "2023-12-03",
        "price": 220,
        "dayOfWeek": "Wednesday",
        "time": "16:00"
    }
]

getLessons(){
  return this.lessons;
}

}

