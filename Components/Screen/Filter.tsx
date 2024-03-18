import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface FilterProps {
  statuses: string[];
  assignees: string[];
  priorities: string[];
  onFilterChange: (status: string | null, assignee: string | null, priority: string | null) => void;
  onCloseFilter: () => void;
}

const Filter: React.FC<FilterProps> = ({ statuses, assignees, priorities, onFilterChange, onCloseFilter }) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedAssignee, setSelectedAssignee] = useState<string | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);

  const applyFilter = () => {
    console.log("Applying filter:", selectedStatus, selectedAssignee, selectedPriority);
    onFilterChange(selectedStatus, selectedAssignee, selectedPriority);
    onCloseFilter();
  };

  const resetFilter = () => {
    setSelectedStatus(null);
    setSelectedAssignee(null);
    setSelectedPriority(null);
    onFilterChange(null, null, null);
    onCloseFilter();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCloseFilter}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>Filter</Text>
      </View>
      <Text style={styles.label}>Status</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedStatus(null)}><Text>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => setSelectedStatus("In Progress")}><Text>In Progress</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => setSelectedStatus("Pending")}><Text>Pending</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => setSelectedStatus("Complete")}><Text>Complete</Text></TouchableOpacity>
      </View>

      <Text style={styles.label}>Assignee</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedAssignee}
        onValueChange={(itemValue: any) => setSelectedAssignee(itemValue)}
      >
        <Picker.Item label="Select" value="" />
        {assignees.map(assignee => (
          <Picker.Item key={assignee} label={assignee} value={assignee} />
        ))}
      </Picker>

      <Text style={styles.label}>Priority</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedPriority}
        onValueChange={(itemValue: any) => setSelectedPriority(itemValue)}
      >
        <Picker.Item label="Select" value="" />
        {priorities.map(priority => (
          <Picker.Item key={priority} label={priority} value={priority} />
        ))}
      </Picker>

      <View style={styles.btn2}>
        <TouchableOpacity style={styles.applyButton2} onPress={resetFilter}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    marginTop: 10,
    zIndex: 1,
    borderColor: '#DCD4D3',
    height: 600,
    padding: 30,
  },
  header: {
    borderBottomColor: '#DCD4D3',
    borderBottomWidth: 1,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 27,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    width: 50,
    borderRadius: 8,
  },
  button2: {
    width: 90,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#0000FF',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    width: 140,
    marginRight: 30,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    borderWidth: 1,
    borderColor: 'gray',
  },
  btn2: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  applyButton2: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#E0E0E0',
    color: '#0000FF',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    width: 140,
    marginRight: 30,
  },
  picker: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  closeButton: {
    color: '#0000FF',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default Filter;
