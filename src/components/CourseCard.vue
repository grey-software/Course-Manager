<template>
  <div class="CourseCard">
    <v-card height="100%" color="blue lighten-2">
      <v-card-title>
        <h1 style="font-size: 60px;">{{CourseCode}}</h1>
      </v-card-title>
      <v-card-subtitle>
        <h3>{{CourseName}}</h3>
      </v-card-subtitle>
      <div class="footer" style="bottom: 0px; position: absolute;">
        <div style="float: left">
          <v-card-text>
            <p>Current Progress: {{Progress}}</p>
          </v-card-text>
        </div>
        <div style="float: right">
          <v-card-actions>
            <v-btn text>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn text>
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
    props:{
        CourseCode:{
            type: String
        },
        CourseName:{
            type: String    
        },
        Progress:{
            type: String
        },
    },
}
</script>

<style>

.CourseCard{
  margin: 0 50px 50px 50px;
  height: 250px;
  width: 400px;
  float: left;
  /* border-radius: 10px;
  border: 0.5px dotted; */
}

</style>