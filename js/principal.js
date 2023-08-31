var app = new Vue({
    el: '#app',
    data: {
      nombre: '',
      promedio: '',
      numeroEntero: 0,
      estado: '',
      lista: []
    },
    methods: {
      agregarNota: function () {
        this.numeroEntero = parseInt(this.promedio);
        if (this.nombre === '' || isNaN(this.numeroEntero)) {
          alert('Nombre y promedio son obligatorios');
        } else {
          this.estado = this.numeroEntero >= 8 ? 'Aprobado' : 'Reprobado';
          this.lista.push({ nombre: this.nombre, promedio: this.numeroEntero, estado: this.estado });
          this.nombre = '';
          this.promedio = '';
          this.estado = '';
          this.numeroEntero = 0
        }
      }
    }
  });
  
