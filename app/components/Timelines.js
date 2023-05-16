import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Timeline} from 'react-native-just-timeline';
import moment from 'moment';

import CustomDialog from '../components/CustomDialog/CustomDialog';
import PopupContent from '../components/PopupContent/PopupContent';

import styles from '../styles/Timeline.style';

const TimelineHeader = () => (
  <View style={styles.timelineHeadingContainer}>
    <Text style={styles.timelineHeadingTitleText}>Itenary</Text>
    <View style={styles.underline} />
  </View>
);

const Timelines = () => {
  const [isModalOpen, setModalStatus] = useState(false);
  const data = [
    {
      pressAction: () => setModalStatus(true),
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'00:00',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      pressAction: () => setModalStatus(true),
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'01:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      pressAction: () => setModalStatus(true),
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'02:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      pressAction: () => setModalStatus(true),
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'03:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'04:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'05:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'06:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'07:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'08:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'09:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'10:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'11:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'12:00 AM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'13:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'14:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'15:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'16:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'17:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'18:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'19:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'20:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'21:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'22:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'23:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
    {
      title: {
        content: 'Title Events',
      },
      description: {
        content: 'Event Description',
      },
      time: {
        content: moment().format('ll')+' '+'24:00 PM',
        style: {
          paddingTop: 8,
        },
      },
    },
  ];
  return (
    <View style={styles.exampleContainer}>
      <CustomDialog
        isVisible={isModalOpen}
        dismissAction={() => setModalStatus(false)}>
        <PopupContent pressAction={() => setModalStatus(false)} />
      </CustomDialog>
      <Timeline TimelineHeader={TimelineHeader} data={data} />
    </View>
  );
};

export default Timelines;