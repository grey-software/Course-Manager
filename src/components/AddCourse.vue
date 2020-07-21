<template>
  <div class="CourseCard">
    <v-card height="100%" color="blue lighten-2">
      <v-card-actions>
        <v-btn text style="position: absolute; 
      left: 50%; top: 50%; transform: translate(-50%, -50%);">
          <v-icon style="font-size: 100px;">mdi-plus-circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>

.CourseCard {
  margin: 0 50px 50px 50px;
  height: 250px;
  width: 400px;
  float: left;
  /* border-radius: 10px;
  border: 0.5px dotted; */
}

</style>