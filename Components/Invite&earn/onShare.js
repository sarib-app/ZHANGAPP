import React from 'react';
import { View, Button, Share } from 'react-native';

const onShare =async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome app!',
        url: 'https://www.example.com',
        title: 'My Cool App',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Content was shared
          console.log('Content shared successfully');
        } else {
          // Content was shared
          console.log('Content shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        // Sharing was dismissed
        console.log('Sharing dismissed');
      }
    } catch (error) {
      console.error(error.message);
    }


};

export default onShare;
