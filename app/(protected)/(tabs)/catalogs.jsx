import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

// 1. Estructura de datos dinámica
const DATA_MODULOS = [
  {
    id: '1',
    titulo: 'Programación Orientada a Objetos (Java)',
    modalidad: 'Presencial',
    cupos: 15,
    docente: 'Jorge Betancourth',
    dias: 'Lunes y Miércoles',
    horario: '07:00 AM - 10:00 AM',
    lugar: 'Laboratorio de Software 2',
    requisitos: ['Algoritmos básicos aprobados', 'Computador portátil propio'],
  },
  {
    id: '2',
    titulo: 'Desarrollo Web con PHP y Laravel',
    modalidad: 'Virtual',
    cupos: 30,
    docente: 'Instructor Juan Pablo',
    dias: 'Martes y Jueves',
    horario: '06:00 PM - 08:00 PM',
    lugar: 'Plataforma LMS SENA / Meet',
    requisitos: ['Conocimiento en HTML/CSS', 'Conexión a internet estable'],
  },
  {
    id: '3',
    titulo: 'Agroindustria',
    modalidad: 'Presencial',
    cupos: 10,
    docente: 'Darwin ayala',
    dias: 'Lunes, Miércoles y Viernes',
    horario: '01:00 PM - 04:00 PM',
    lugar: 'Aula 201',
    requisitos: ['Ser mayor de edad', 'Tener buen promedio académico'],
  },
];

export default function ModulosAcademicosScreen() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroModalidad, setFiltroModalidad] = useState('');

  // Lógica de filtrado en tiempo real
  const modulosFiltrados = DATA_MODULOS.filter((item) => {
    const coincideNombre = item.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideModalidad =
      filtroModalidad === '' || item.modalidad.toLowerCase() === filtroModalidad.toLowerCase();
    return coincideNombre && coincideModalidad;
  });

  // Renderizado de cada tarjeta
  const renderTarjetaModulo = ({ item }) => {
    const esVirtual = item.modalidad.toLowerCase() === 'virtual';

    return (
      <View style={styles.tarjeta}>
        {/* Encabezado de tarjeta */}
        <View style={styles.moduloHeader}>
          <View style={[styles.tagModalidad, esVirtual ? styles.tagVirtual : styles.tagPresencial]}>
            <Text style={[styles.tagTexto, esVirtual ? styles.tagTextoVirtual : styles.tagTextoPresencial]}>
              {item.modalidad}
            </Text>
          </View>
          <View style={styles.cuposContenedor}>
            <Ionicons name="people" size={16} color="#0d6efd" />
            <Text style={styles.cuposTexto}>{item.cupos} Cupos libres</Text>
          </View>
        </View>

        {/* Cuerpo de tarjeta */}
        <View style={styles.moduloCuerpo}>
          <Text style={styles.tituloModulo}>{item.titulo}</Text>

          <View style={styles.docenteContenedor}>
            <FontAwesome5 name="id-card" size={14} color="#6c757d" />
            <Text style={styles.docenteTexto}>
              Docente: <Text style={styles.bold}>{item.docente}</Text>
            </Text>
          </View>

          {/* Detalles rápidos */}
          <View style={styles.detallesRapidos}>
            <View style={styles.detalleItem}>
              <Ionicons name="calendar-outline" size={16} color="#495057" />
              <Text style={styles.detalleTexto}>{item.dias}</Text>
            </View>
            <View style={styles.detalleItem}>
              <Ionicons name="time-outline" size={16} color="#495057" />
              <Text style={styles.detalleTexto}>{item.horario}</Text>
            </View>
            <View style={styles.detalleItem}>
              <Ionicons name={esVirtual ? 'laptop-outline' : 'location-outline'} size={16} color="#495057" />
              <Text style={styles.detalleTexto}>{item.lugar}</Text>
            </View>
          </View>

          {/* Requisitos */}
          <View style={styles.requisitosContenedor}>
            <Text style={styles.requisitosTitulo}>Requisitos obligatorios:</Text>
            {item.requisitos.map((req, idx) => (
              <View key={idx} style={styles.requisitoItem}>
                <Ionicons name="checkmark-circle" size={16} color="#198754" />
                <Text style={styles.requisitoTexto}>{req}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Botones de acción */}
        <View style={styles.moduloPie}>
          <TouchableOpacity style={styles.btnVerMas}>
            <Text style={styles.btnVerMasTexto}>Más detalles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPostularme}>
            <Text style={styles.btnPostularmeTexto}>Postularme</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.contenedorPadre}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

     

      {/* Lista Principal de Módulos */}
      <FlatList
        data={modulosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderTarjetaModulo}
        contentContainerStyle={styles.listaContenido}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerSeccion}>
            <Text style={styles.tituloHeader}>Módulos Académicos Disponibles</Text>
            <Text style={styles.subtituloHeader}>
              Explora los cursos, horarios y requisitos para tu formación técnica.
            </Text>

            {/* Input de Búsqueda */}
            <View style={styles.busquedaContenedor}>
              <Ionicons name="search-outline" size={20} color="#6c757d" style={styles.iconoBusqueda} />
              <TextInput
                style={styles.inputBusqueda}
                placeholder="Buscar módulo por nombre..."
                placeholderTextColor="#adb5bd"
                value={busqueda}
                onChangeText={setBusqueda}
              />
            </View>

            {/* Chips de Selección de Modalidad */}
            <View style={styles.filtrosContenedor}>
              {[
                { label: 'Todas', value: '' },
                { label: 'Presencial', value: 'presencial' },
                { label: 'Virtual', value: 'virtual' },
              ].map((filter) => (
                <TouchableOpacity
                  key={filter.value}
                  style={[
                    styles.chipFiltro,
                    filtroModalidad === filter.value && styles.chipFiltroActivo,
                  ]}
                  onPress={() => setFiltroModalidad(filter.value)}
                >
                  <Text
                    style={[
                      styles.textoChip,
                      filtroModalidad === filter.value && styles.textoChipActivo,
                    ]}
                  >
                    {filter.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedorPadre: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userRole: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0d6efd',
  },
  appName: {
    fontSize: 10,
    color: '#6c757d',
  },
  btnCerrarSesion: {
    padding: 6,
  },
  listaContenido: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerSeccion: {
    marginVertical: 16,
  },
  tituloHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
  },
  subtituloHeader: {
    fontSize: 13,
    color: '#6c757d',
    marginTop: 4,
    marginBottom: 16,
  },
  busquedaContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: '#ced4da',
    marginBottom: 12,
  },
  iconoBusqueda: {
    marginRight: 8,
  },
  inputBusqueda: {
    flex: 1,
    fontSize: 14,
    color: '#212529',
  },
  filtrosContenedor: {
    flexDirection: 'row',
    gap: 8,
  },
  chipFiltro: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#e9ecef',
  },
  chipFiltroActivo: {
    backgroundColor: '#0d6efd',
  },
  textoChip: {
    fontSize: 13,
    color: '#495057',
  },
  textoChipActivo: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  moduloHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tagModalidad: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  tagPresencial: {
    backgroundColor: '#e7f1ff',
  },
  tagVirtual: {
    backgroundColor: '#e6f4ea',
  },
  tagTexto: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tagTextoPresencial: {
    color: '#0d6efd',
  },
  tagTextoVirtual: {
    color: '#198754',
  },
  cuposContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cuposTexto: {
    fontSize: 12,
    color: '#0d6efd',
    fontWeight: '600',
  },
  moduloCuerpo: {
    marginBottom: 16,
  },
  tituloModulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 6,
  },
  docenteContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  docenteTexto: {
    fontSize: 13,
    color: '#6c757d',
  },
  bold: {
    fontWeight: 'bold',
    color: '#212529',
  },
  detallesRapidos: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 10,
    gap: 6,
    marginBottom: 12,
  },
  detalleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detalleTexto: {
    fontSize: 13,
    color: '#495057',
  },
  requisitosContenedor: {
    marginTop: 4,
  },
  requisitosTitulo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 6,
  },
  requisitoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  requisitoTexto: {
    fontSize: 12,
    color: '#6c757d',
  },
  moduloPie: {
    flexDirection: 'row',
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: '#f1f3f5',
    paddingTop: 12,
  },
  btnVerMas: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ced4da',
    alignItems: 'center',
  },
  btnVerMasTexto: {
    color: '#495057',
    fontWeight: '600',
    fontSize: 13,
  },
  btnPostularme: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#0d6efd',
    alignItems: 'center',
  },
  btnPostularmeTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  navItem: {
    alignItems: 'center',
  },
  navItemActivo: {
    borderTopColor: '#0d6efd',
  },
  navTexto: {
    fontSize: 10,
    color: '#6c757d',
    marginTop: 2,
  },
  navTextoActivo: {
    color: '#0d6efd',
    fontWeight: 'bold',
  },
});