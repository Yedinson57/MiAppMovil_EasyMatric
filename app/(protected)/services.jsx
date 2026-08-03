import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Services() {
  const steps = [
    {
      number: '01',
      title: 'Registro Digital',
      description: 'Crea tu perfil único en la plataforma para centralizar tu información.',
      align: 'left',
    },
    {
      number: '02',
      title: 'Selección Institucional',
      description: 'Explora y elige la institución académica que mejor se adapte a tus metas.',
      align: 'right',
    },
    {
      number: '03',
      title: 'Carga de Documentación',
      description: 'Digitaliza y sube tus archivos de forma segura. Adiós al papel.',
      align: 'left',
    },
    {
      number: '04',
      title: 'Validación y Respuesta',
      description: 'Nuestro sistema y la institución validan tu información rápidamente.',
      align: 'right',
    },
    {
      number: '05',
      title: 'Control de Estado',
      description: 'Monitorea tu avance y descarga tu comprobante de matrícula oficial.',
      align: 'left',
    },
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      {/* SECCIÓN 1: ECOSISTEMA DIGITAL */}
      <View style={styles.badgeContainer}>
        <Text style={styles.topBadgeText}>Funcionalidades</Text>
      </View>
      <Text style={styles.mainTitle}>Ecosistema Digital EasyMatric</Text>
      <Text style={styles.mainSubtitle}>
        Una plataforma diseñada para conectar a toda la comunidad educativa de manera eficiente.
      </Text>

      {/* TARJETAS PRINCIPALES */}
      <View style={styles.cardsWrapper}>
        {/* CARD 1: Estudiantes y Acudientes */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>👥</Text>
            </View>
            <Text style={styles.cardTitle}>Estudiantes y Acudientes</Text>
          </View>
          <Text style={styles.cardDescription}>
            Autogestión total desde cualquier lugar para facilitar el acceso a la educación.
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>✓  Pre-registro y Matrícula 24/7</Text>
            <Text style={styles.bulletItem}>✓  Carga digital de documentos</Text>
            <Text style={styles.bulletItem}>✓  Notificaciones de estado en tiempo real</Text>
          </View>
        </View>

        {/* CARD 2: Gestión Administrativa */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>💻</Text>
            </View>
            <Text style={styles.cardTitle}>Gestión Administrativa</Text>
          </View>
          <Text style={styles.cardDescription}>
            Herramientas avanzadas para el control total del proceso institucional.
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>✓  Panel de control de cupos</Text>
            <Text style={styles.bulletItem}>✓  Validación automatizada de archivos</Text>
            <Text style={styles.bulletItem}>✓  Generación de informes y analíticas</Text>
          </View>
        </View>
      </View>

      {/* SECCIÓN 2: RUTA DE GESTIÓN EDUCATIVA */}
      <View style={styles.routeHeader}>
        <Text style={styles.routeTagline}>Tu Camino al Éxito</Text>
        <Text style={styles.routeTitle}>Ruta de Gestión Educativa</Text>
        <Text style={styles.routeSubtitle}>
          Sigue estos pasos para completar tu proceso en tiempo récord.
        </Text>
      </View>

      {/* TIMELINE RUTA */}
      <View style={styles.timelineContainer}>
        <View style={styles.timelineLine} />

        {steps.map((step, index) => {
          const isLeft = step.align === 'left';
          return (
            <View key={index} style={styles.timelineRow}>
              {/* Lado Izquierdo */}
              <View style={styles.timelineSide}>
                {isLeft && (
                  <View style={[styles.stepCard, styles.stepCardLeft]}>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepDesc}>{step.description}</Text>
                  </View>
                )}
              </View>

              {/* Nódulo Central */}
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>{step.number}</Text>
              </View>

              {/* Lado Derecho */}
              <View style={styles.timelineSide}>
                {!isLeft && (
                  <View style={[styles.stepCard, styles.stepCardRight]}>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepDesc}>{step.description}</Text>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    alignItems: 'center',
  },
  badgeContainer: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },
  topBadgeText: {
    color: '#4338CA',
    fontSize: 12,
    fontWeight: '600',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 8,
  },
  mainSubtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 28,
    maxWidth: 320,
    lineHeight: 18,
  },
  cardsWrapper: {
    width: '100%',
    gap: 16,
    marginBottom: 44,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 10,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
    flex: 1,
  },
  cardDescription: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 14,
    lineHeight: 17,
  },
  bulletList: {
    gap: 6,
  },
  bulletItem: {
    fontSize: 12,
    color: '#334155',
    fontWeight: '500',
  },
  routeHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  routeTagline: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6366F1',
    marginBottom: 4,
  },
  routeTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 4,
  },
  routeSubtitle: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
  timelineContainer: {
    width: '100%',
    position: 'relative',
    paddingVertical: 10,
  },
  timelineLine: {
    position: 'absolute',
    top: 20,
    bottom: 20,
    left: '50%',
    width: 2,
    backgroundColor: '#6366F1',
    marginLeft: -1,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  timelineSide: {
    flex: 1,
  },
  stepBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#4338CA',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    marginHorizontal: 4,
    borderWidth: 3,
    borderColor: '#F8FAFC',
  },
  stepBadgeText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 11,
  },
  stepCard: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  stepCardLeft: {
    marginRight: 2,
  },
  stepCardRight: {
    marginLeft: 2,
  },
  stepTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 2,
  },
  stepDesc: {
    fontSize: 10,
    color: '#64748B',
    lineHeight: 14,
  },
});