import React from "react";
import { View,Text } from "react-native";
import Filter from "./Filter";
export default function Hello(){
    function handleFilterChange(status: string | null, assignee: string | null, priority: string | null): void {
        throw new Error("Function not implemented.");
    }

    return(
        <View><Text>Filter</Text>
         <Filter statuses={[]} assignees={[]} priorities={[]} onFilterChange={handleFilterChange} /></View>
    )
}