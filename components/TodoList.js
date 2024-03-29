import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../Colors";

export default TodoList = ({ list }) => {
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const CompletedCount = list.todos.filter(todo => todo.completed == true).length;
    const RemainingCount = list.todos.filter(todo => todo.completed != true).length;

    return (
        <View style={[styles.listContainer, { backgroundColor: list.color }]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>

            <View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.count}>{RemainingCount}</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.count}>{CompletedCount}</Text>
                    <Text style={styles.subtitle}>Completed</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200,

    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.white,
        marginBottom: 18
    },
    count: {
        fontSize: 40,
        fontWeight: "100",
        color: Colors.white
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.white
    }
})