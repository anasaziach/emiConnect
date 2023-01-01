import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/data')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      {data ? (
        <Text>{data.text}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Header;