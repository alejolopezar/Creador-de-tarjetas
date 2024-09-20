class Activity {
    constructor(id,title,description,imgUrl){
      this.id = id;
      this.title = title;
      this.description = description;
      this.imgUrl = imgUrl;
    }
  }

  class Repository {
    constructor() {
        this.actividades = [];
        this.id = 0;
    }

    getAllActivities(){
        return this.actividades;
    }

    createActivity(title,description,imgUrl) {
        const activity = new Activity(this.id,title,description,imgUrl);
        this.actividades.push(activity);
        this.id++;
        
    }

    deleteActivity(id) {
      this.actividades = this.actividades.filter((actividad) => actividad.id !== id);
    }
  }

  // Exportar las clases Activity y Repository
module.exports = {
    Activity,
    Repository
  };