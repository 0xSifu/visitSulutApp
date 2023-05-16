import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Happy from '../../images/hike.png';
import styles from './PopupContent.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SelectList } from 'react-native-dropdown-select-list'

const PopupContent = ({pressAction}) => {
    const [selected, setSelected] = useState();

    const data = [
        {key:'1', value:'Bunaken'},
        {key:'2', value:'Yesus Memberkati Statue'},
        {key:'3', value:'Pulau Siladen'},
        {key:'4', value:'Hutan Lahendong'},
        {key:'5', value:'Kuliner di Kota Manado'},
        {key:'6', value:'Berkunjung ke Tomohon'},
        {key:'7', value:'Staycation'},
    ]

  return (
    <View style={styles.popupContent}>
      <Image source={Happy} style={styles.popupImage} />
      <View style={styles.popupTextContainer}>
        <Text style={styles.popupHeading}>Kegiatan yang akan dilakukan?</Text>
        {/* here */}
        <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
        />

      </View>
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <TouchableOpacity
          onPress={() => pressAction()}
          style={[styles.actionButton, {backgroundColor: '#00b48b'}]}>
          <Icon name="check" style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pressAction()}
          style={[styles.actionButton, {backgroundColor: '#d0594c'}]}>
          <Icon name="times" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopupContent;