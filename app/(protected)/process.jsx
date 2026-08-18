import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ProcessScreen() {
    const router = useRouter();

    // Estados
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");

    // Manejador para el selector de fecha
    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === "ios");

        if (selectedDate) {
            setDate(selectedDate);
            const day = String(selectedDate.getDate()).padStart(2, "0");
            const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
            const year = selectedDate.getFullYear();
            setFormattedDate(`${day}/${month}/${year}`);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Botón Volver */}
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={20} color="#1A202C" />
                    <Text style={styles.backButtonText}>Volver</Text>
                </TouchableOpacity>

                {/* Encabezado */}
                <View style={styles.header}>
                    <View style={styles.titleRow}>
                        <Ionicons name="person-add-outline" size={24} color="#1A202C" />
                        <Text style={styles.title}>Proceso de Matrícula</Text>
                    </View>
                    <Text style={styles.subtitle}>
                        Asegúrate de que toda la información coincida con tus documentos físicos.
                    </Text>
                </View>

                {/* Paso 01: Información del Estudiante */}
                <View style={styles.card}>
                    <View style={styles.stepHeader}>
                        <View style={styles.stepBadge}>
                            <Text style={styles.stepBadgeText}>01</Text>
                        </View>
                        <Text style={styles.cardTitle}>Información del Estudiante</Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nombres Completos</Text>
                        <TextInput placeholder="Ej: Eduardo Silva" style={styles.input} />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Apellidos Completos</Text>
                        <TextInput placeholder="Ej: Castro Pérez" style={styles.input} />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tipo de Documento</Text>
                        <TextInput placeholder="Tarjeta de Identidad / C.C." style={styles.input} />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Número de Documento</Text>
                        <TextInput placeholder="123456789" keyboardType="numeric" style={styles.input} />
                    </View>

                    {/* Campo Fecha de Nacimiento con Selector Naito */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Fecha de Nacimiento</Text>
                        <TouchableOpacity
                            style={styles.dateInputContainer}
                            activeOpacity={0.8}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text style={[styles.dateText, !formattedDate && styles.placeholderText]}>
                                {formattedDate || "dd/mm/aaaa"}
                            </Text>
                            <Ionicons name="calendar-outline" size={20} color="#64748B" />
                        </TouchableOpacity>

                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display={Platform.OS === "ios" ? "inline" : "default"}
                                onChange={onChangeDate}
                                maximumDate={new Date()}
                            />
                        )}
                    </View>
                </View>

                {/* Paso 02: Ubicación y Contacto */}
                <View style={styles.card}>
                    <View style={styles.stepHeader}>
                        <View style={styles.stepBadge}>
                            <Text style={styles.stepBadgeText}>02</Text>
                        </View>
                        <Text style={styles.cardTitle}>Ubicación y Contacto</Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Dirección de Residencia</Text>
                        <TextInput placeholder="Calle 1 # 2-3 Barrio..." style={styles.input} />
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <Text style={styles.label}>Estrato</Text>
                            <TextInput placeholder="1" keyboardType="numeric" style={styles.input} />
                        </View>
                        <View style={[styles.inputGroup, { flex: 2 }]}>
                            <Text style={styles.label}>Teléfono Celular</Text>
                            <TextInput placeholder="300 000 0000" keyboardType="phone-pad" style={styles.input} />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Correo Electrónico</Text>
                        <TextInput placeholder="usuario@correo.com" keyboardType="email-address" style={styles.input} />
                    </View>
                </View>

                {/* Paso 03: Información del Acudiente */}
                <View style={styles.card}>
                    <View style={styles.stepHeader}>
                        <View style={styles.stepBadge}>
                            <Text style={styles.stepBadgeText}>03</Text>
                        </View>
                        <Text style={styles.cardTitle}>Información del Acudiente</Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nombre del Acudiente</Text>
                        <TextInput placeholder="Padre, madre o tutor legal" style={styles.input} />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Parentesco</Text>
                        <TextInput placeholder="Ej: Madre" style={styles.input} />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Teléfono de Contacto</Text>
                        <TextInput placeholder="300 000 0000" keyboardType="phone-pad" style={styles.input} />
                    </View>
                </View>

                {/* Paso 04: Carga de Archivos */}
                <View style={styles.card}>
                    <View style={styles.stepHeader}>
                        <View style={styles.stepBadge}>
                            <Text style={styles.stepBadgeText}>04</Text>
                        </View>
                        <Text style={styles.cardTitle}>Carga de Documentos</Text>
                    </View>

                    <TouchableOpacity style={styles.uploadBox} activeOpacity={0.7}>
                        <Ionicons name="card-outline" size={24} color="#3B82F6" />
                        <Text style={styles.uploadText}>Documento de Identidad (PDF/JPG)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.uploadBox} activeOpacity={0.7}>
                        <Ionicons name="document-text-outline" size={24} color="#3B82F6" />
                        <Text style={styles.uploadText}>Certificado de Notas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.uploadBox} activeOpacity={0.7}>
                        <Ionicons name="camera-outline" size={24} color="#3B82F6" />
                        <Text style={styles.uploadText}>Foto Tipo Documento</Text>
                    </TouchableOpacity>
                </View>

                {/* Checkbox de Validación */}
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setIsChecked(!isChecked)}
                    activeOpacity={0.8}
                >
                    <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                        {isChecked && <Ionicons name="checkmark" size={12} color="#FFFFFF" />}
                    </View>
                    <Text style={styles.checkboxText}>
                        Certifico que la información ingresada es verídica.
                    </Text>
                </TouchableOpacity>

                {/* Botón de Enviar */}
                <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
                    <Text style={styles.submitButtonText}>Finalizar y Enviar Solicitud</Text>
                    <FontAwesome5 name="paper-plane" size={14} color="#FFFFFF" style={{ marginLeft: 8 }} />
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    },
    scrollContent: {
        padding: 16,
        gap: 16,
        paddingBottom: 40,
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    backButtonText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#1A202C",
    },
    header: {
        marginBottom: 4,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#0F172A",
    },
    subtitle: {
        fontSize: 13,
        color: "#64748B",
        marginTop: 4,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        gap: 12,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    stepHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 4,
    },
    stepBadge: {
        backgroundColor: "#181A2A",
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
    },
    stepBadgeText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "700",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0F172A",
    },
    inputGroup: {
        gap: 4,
    },
    label: {
        fontSize: 12,
        fontWeight: "600",
        color: "#475569",
    },
    input: {
        backgroundColor: "#F8FAFC",
        borderWidth: 1,
        borderColor: "#E2E8F0",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        color: "#0F172A",
    },
    dateInputContainer: {
        backgroundColor: "#F8FAFC",
        borderWidth: 1,
        borderColor: "#E2E8F0",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dateText: {
        fontSize: 14,
        color: "#0F172A",
    },
    placeholderText: {
        color: "#94A3B8",
    },
    row: {
        flexDirection: "row",
        gap: 10,
    },
    uploadBox: {
        borderWidth: 1.5,
        borderColor: "#CBD5E1",
        borderStyle: "dashed",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8FAFC",
        gap: 6,
    },
    uploadText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#475569",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 4,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1.5,
        borderColor: "#64748B",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    checkboxChecked: {
        backgroundColor: "#181A2A",
        borderColor: "#181A2A",
    },
    checkboxText: {
        fontSize: 12,
        color: "#475569",
    },
    submitButton: {
        backgroundColor: "#181A2A",
        borderRadius: 12,
        paddingVertical: 14,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    submitButtonText: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 14,
    },
});