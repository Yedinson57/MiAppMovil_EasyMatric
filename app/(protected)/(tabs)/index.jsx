import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ScreenContainer from "../../../components/ScreenContainer";
import Header from "../../../components/Header";
import Colors from "../../../constants/colors";

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >

        {/* Welcome */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeSmall}>
            Bienvenido, Estudiante
          </Text>

          <Text style={styles.welcomeName}>
            Alex Camilo
          </Text>
        </View>

        {/* Main Banner */}
        <View style={styles.banner}>

          <View style={styles.bannerContent}>

            <Text style={styles.bannerTitle}>
              Transformamos{"\n"}
              la matrícula{"\n"}
              estudiantil
            </Text>

            <Text style={styles.bannerDescription}>
              Gestiona tus procesos académicos de manera
              rápida, organizada y desde cualquier lugar.
            </Text>

          </View>

          <Image
            source={require("../../../assets/img02.png")}
            style={styles.bannerImage}
            resizeMode="contain"
          />

        </View>

        {/* Quick Access */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Acceso Rapido
          </Text>

          <Text style={styles.sectionSubtitle}>
            ¿Qué es lo que quieres hacer?
          </Text>
        </View>

        <View style={styles.cardsContainer}>

          <QuickAccessCard
            icon="🏫"
            title="Instituciones"
            subtitle="Explora diferentes instituciones"
          />

          <QuickAccessCard
            icon="📄"
            title="Mis matriculas"
            subtitle="Visualiza tus matriculas"
          />

          <QuickAccessCard
            icon="📚"
            title="Catalogos"
            subtitle="Explorar programas"
          />

          <QuickAccessCard
            icon="⭐"
            title="Favoritos"
            subtitle="Instituciones guardadas"
          />

        </View>

        {/* Enrollment */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Mi matricula
          </Text>

          <Text style={styles.sectionSubtitle}>
            proceso actual de la institucion
          </Text>
        </View>

        <View style={styles.enrollmentCard}>

          <View style={styles.enrollmentTop}>

            <View>
              <Text style={styles.enrollmentTitle}>
                Analisis y Desarrollo de Software
              </Text>

              <Text style={styles.enrollmentInstitution}>
                SENA
              </Text>
            </View>

            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>
                Activo
              </Text>
            </View>

          </View>

          <View style={styles.divider} />

          <TouchableOpacity>
            <Text style={styles.details}>
              Mirar detalles →
            </Text>
          </TouchableOpacity>

        </View>

        {/* Updates */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Ultimas actualizaciones
          </Text>
        </View>

        <View style={styles.updateCard}>

          <View style={styles.updateIcon}>
            <Text>📢</Text>
          </View>

          <View style={styles.updateContent}>

            <Text style={styles.updateTitle}>
              Periodo de matricula
            </Text>

            <Text style={styles.updateDescription}>
              Consulte la información más reciente sobre los procesos de inscripción.
            </Text>

            <TouchableOpacity>
              <Text style={styles.details}>
                Mas informacion →
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>
    </ScreenContainer>
  );
}

/* Tarjeta de Acceso rAPIDO */

function QuickAccessCard({
  icon,
  title,
  subtitle,
}) {
  return (
    <TouchableOpacity
      style={styles.quickCard}
      activeOpacity={0.8}
    >

      <View style={styles.quickIcon}>
        <Text style={styles.iconText}>
          {icon}
        </Text>
      </View>

      <Text style={styles.quickTitle}>
        {title}
      </Text>

      <Text style={styles.quickSubtitle}>
        {subtitle}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 40,
  },


  /* WELCOME */

  welcomeContainer: {
    marginBottom: 22,
  },

  welcomeSmall: {
    fontSize: 16,
    color: Colors.textSecondary,
  },

  welcomeName: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.text,
    marginTop: 3,
  },

  /* BANNER */

  banner: {
    backgroundColor: Colors.primary,
    borderRadius: 24,
    minHeight: 210,
    padding: 22,
    marginBottom: 30,
    overflow: "hidden",
    position: "relative",
  },

  bannerContent: {
    width: "58%",
    zIndex: 2,
    paddingTop: 5,
  },

  bannerTitle: {
    fontSize: 20,
    lineHeight: 31,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  bannerDescription: {
    color: "#E5E7EB",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 13,
    paddingRight: 6,
  },

  bannerImage: {
    position: "absolute",
    padding: 21,
    right: -3,
    top: 25,
    width: 165,
    height: 165,
  },


  /* SECTION */

  sectionHeader: {
    marginBottom: 15,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: Colors.text,
  },

  sectionSubtitle: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginTop: 4,
  },


  /* QUICK ACCESS */

  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  quickCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    marginBottom: 14,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
  },

  quickIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: Colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  iconText: {
    fontSize: 22,
  },

  quickTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.text,
  },

  quickSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 5,
    lineHeight: 17,
  },


  /* ENROLLMENT */

  enrollmentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 28,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
  },

  enrollmentTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  enrollmentTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
    maxWidth: "75%",
  },

  enrollmentInstitution: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 6,
  },

  statusContainer: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: "#15803D",
    fontSize: 12,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 15,
  },

  details: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },


  /* UPDATES */

  updateCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    marginBottom: 20,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
  },

  updateIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: "#FEF3C7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  updateContent: {
    flex: 1,
  },

  updateTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },

  updateDescription: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
    marginTop: 5,
    marginBottom: 10,
  },

});