<template>
  <div id="app">
    <v-app>

      <v-app-bar dense app>
        <v-app-bar-nav-icon @click="drawer= true"></v-app-bar-nav-icon>
        <v-toolbar-title> {{name}} </v-toolbar-title>
        <v-spacer></v-spacer>
        {{WebsiteName}}
        <div style="margin-left: 10px">
          <i class="fa fa-folder-open" aria-hidden="true"></i>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary overlay-opacity="0">
        <v-list nav dense>
          <v-list-item-group active-class="">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-calendar</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Calendar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
  
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-content>

        <div class="AllCourses" >

          <div v-for="course in courses" :key="course">

            <CourseCard :CourseCode="course.code" :CourseName="course.name" :Progress="course.progress"></CourseCard>
          
          </div>

          <!-- <CourseCard CourseCode="STA256" CourseName="Probability and Statistics I" Progress="0/0%"></CourseCard>

          <CourseCard CourseCode="CSC207" CourseName="Software Design" Progress="0/0%"></CourseCard>

          <CourseCard CourseCode="CSC236" CourseName="Introduction to Theory of Computation"
           Progress="0/0%"></CourseCard>

          <CourseCard CourseCode="MAT224" CourseName="Linear Algebra II" Progress="0/0%"></CourseCard>

          <CourseCard CourseCode="MAT232" CourseName="Calculus of Several Variables" Progress="0/0%"></CourseCard> -->

          <AddCourse/>

          <button @click="test()">this is a test button for router</button>

        </div>

      </v-content>

      <div style="width:500px; height:500px">
        <calendar/>
      </div>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "../components/Calendar"
import CourseCard from "../components/CourseCard"
import AddCourse from "../components/AddCourse"

export default {
  name: 'App',

  components: {
    Calendar,
    CourseCard,
    AddCourse
  },

  data: () => ({
    WebsiteName: 'Open Course Manager',
    name: 'UTM_CS_Student',
    drawer: false,
    courses: [{code: 'CSC207', name: 'Software Design', progress: "0/0%"}, {code: 'CSC236', name:
    'Introduction to the Theory of Compoutation', progress: "0/0%"}, {code: 'STA256', 
    name: 'Probability and Statistics I', progress: "0/0%"}, {code: 'MAT224', name: 
    'Linear Algebra II', progress: "0/0%"}],
  }),

  methods: {  
    test(){
      this.$router.push({ name: "Course"});
    }
  }
};
</script>

<style>

</style>
