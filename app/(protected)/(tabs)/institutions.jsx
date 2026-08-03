import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,ScrollView,TextInput,Image,TouchableOpacity,ActivityIndicator,} from "react-native";
import ScreenContainer from "../../../components/ScreenContainer";

export default function Institutions() {
  const [instituciones, setInstituciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Consumo de API mediante Fetch
  useEffect(() => {
    const obtenerInstituciones = async () => {
      try {
        // URL de prueba simulada
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar las instituciones.");
        }

        const datos = await respuesta.json();

        // Mapeamos o adaptamos la respuesta de la API a nuestro formato
        const datosAdaptados = datos.map((item) => ({
          id: item.id.toString(),
          nombre: `I.E. ${item.company.name}`,
          ubicacion: `Popayán - ${item.address.city}`,
          grados: "6° a 11°",
          jornada: "Jornada Mañana",
          estado: item.id % 2 === 0 ? "Cupos Disponibles" : "Pocos Cupos",
          tipoEstado: item.id % 2 === 0 ? "disponible" : "pocos",
          imagen: "https://via.placeholder.com/400x200",
        }));

        setInstituciones(datosAdaptados);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerInstituciones();
  }, []);

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Encabezado de la vista (Ahora inicia directo desde aquí) */}
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Instituciones Disponibles</Text>
          <Text style={styles.subtitle}>
            Explora y selecciona la sede donde deseas realizar tu matrícula
          </Text>
        </View>

        {/* Buscador */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Buscar sede o municipio..."
            placeholderTextColor="#94a3b8"
            style={styles.searchInput}
          />
        </View>

        {/* Estado de Carga */}
        {cargando && (
          <View style={styles.centerState}>
            <ActivityIndicator size="large" color="#4facfe" />
            <Text style={styles.stateText}>Cargando instituciones...</Text>
          </View>
        )}

        {/* Estado de Error */}
        {error !== "" && !cargando && (
          <View style={styles.centerState}>
            <Text style={styles.errorText}>⚠️ {error}</Text>
          </View>
        )}

        {/* Lista de Tarjetas */}
        {!cargando && !error && (
          <View style={styles.cardsList}>
            {instituciones.map((item) => (
              <View key={item.id} style={styles.card}>
                {/* Imagen y Badge de Estado */}
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                  <View
                    style={[
                      styles.badge,
                      item.tipoEstado === "disponible" && styles.badgeSuccess,
                      item.tipoEstado === "pocos" && styles.badgeWarning,
                    ]}
                  >
                    <Text style={styles.badgeText}>{item.estado}</Text>
                  </View>
                </View>

                {/* Información del Colegio */}
                <View style={styles.cardBody}>
                  <Text style={styles.institutionName}>{item.nombre}</Text>
                  <Text style={styles.locationText}>📍 {item.ubicacion}</Text>

                  <View style={styles.detailsRow}>
                    <Text style={styles.detailItem}>🎓 {item.grados}</Text>
                    <Text style={styles.detailItem}>🕒 {item.jornada}</Text>
                  </View>

                  <TouchableOpacity style={styles.btnMore} activeOpacity={0.8}>
                    <Text style={styles.btnMoreText}>Ver más información</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1c2d",
  },
  subtitle: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
  },
  searchContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  searchInput: {
    fontSize: 14,
    color: "#1a1c2d",
  },
  centerState: {
    paddingVertical: 40,
    alignItems: "center",
  },
  stateText: {
    marginTop: 10,
    color: "#64748b",
    fontSize: 14,
  },
  errorText: {
    color: "#ef4444",
    fontSize: 14,
    fontWeight: "bold",
  },
  cardsList: {
    gap: 18,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  imageContainer: {
    position: "relative",
    height: 150,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeSuccess: { backgroundColor: "#22c55e" },
  badgeWarning: { backgroundColor: "#f59e0b" },
  badgeText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },
  cardBody: {
    padding: 15,
  },
  institutionName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1c2d",
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 12,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    paddingTop: 10,
    marginBottom: 12,
  },
  detailItem: {
    fontSize: 12,
    color: "#334155",
    fontWeight: "500",
  },
  btnMore: {
    backgroundColor: "#f1f5f9",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  btnMoreText: {
    color: "#1a1c2d",
    fontWeight: "bold",
    fontSize: 12,
  },
});