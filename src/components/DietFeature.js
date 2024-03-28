import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Text,
  Input,
  Heading,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const DietFeature = () => {
  const [profile, setProfile] = useState({
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryPreferences: '',
    healthGoals: '',
  });
  const [selectedGoal, setSelectedGoal] = useState('');
  const [mealPlan, setMealPlan] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleGoalSetting = (goal) => {
    setSelectedGoal(goal);
    setProfile({ ...profile, healthGoals: goal });
  };

  const generateMealPlan = () => {
    // Simulate API call to fetch meal plan based on user preferences
    const generatedPlan = [
      { day: 'Monday', breakfast: 'Oatmeal', lunch: 'Salad', dinner: 'Grilled Chicken' },
      { day: 'Tuesday', breakfast: 'Smoothie', lunch: 'Quinoa Bowl', dinner: 'Fish Tacos' },
      { day: 'Wednesday', breakfast: 'Eggs', lunch: 'Grilled Vegetables', dinner: 'Salmon' },
      { day: 'Thursday', breakfast: 'Yogurt', lunch: 'Turkey Sandwich', dinner: 'Vegetable Stir-fry' },
      { day: 'Friday', breakfast: 'Pancakes', lunch: 'Bean Burrito', dinner: 'Steak' },
      // Add more meal plan items
    ];
    setMealPlan(generatedPlan);
  };

  const saveProfile = () => {
    // Validate all fields
    if (
      !profile.age ||
      !profile.weight ||
      !profile.height ||
      !profile.activityLevel ||
      !profile.dietaryPreferences ||
      !profile.healthGoals
    ) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    // Simulate saving profile data to a database
    // In a real application, you would make an API call to store the data
    console.log('Saving profile:', profile);
    alert('Profile saved successfully!');
    // Clear error message
    setErrorMessage('');
  };

  return (
    <>
      <Navbar />
      <Box maxW="800px" mx="auto" mt="8" p="4" textAlign="center">
        <Heading as="h1" size="lg" mb="4">Diet Feature Profile</Heading>
        <FormControl mb="4">
          <Text sx={{fontSize:18, fontWeight: 'bold',}}>Age</Text>
          <Input type="text" name="age" value={profile.age} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <Text sx={{fontSize:18, fontWeight: 'bold',}}>Weight</Text>
          <Input type="text" name="weight" value={profile.weight} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <Text sx={{fontSize:18, fontWeight: 'bold',}}>Height</Text>
          <Input type="text" name="height" value={profile.height} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <Text sx={{fontSize:18, fontWeight: 'bold',}}>Activity Level</Text>
          <Input type="text" name="activityLevel" value={profile.activityLevel} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <Text sx={{fontSize:18, fontWeight: 'bold',}}>Dietary Preferences</Text>
          <Input type="text" name="dietaryPreferences" value={profile.dietaryPreferences} onChange={handleChange} sx={{width:'500px',height:'20px'}}/>
        </FormControl>
        <br/>
        <hr/>
        <Heading as="h2" size="lg" mb="4" sx={{paddingBottom:'20px'}}>Goal Setting</Heading>
        <Button
          colorScheme={selectedGoal === 'Weight loss' ? 'teal' : 'blue'}
          onClick={() => handleGoalSetting('Weight loss')}
          mr="2"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: selectedGoal === 'Weight loss' ? '#319795' : '#3182CE',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          _hover={{ backgroundColor: selectedGoal === 'Weight loss' ? '#2C7A7B' : '#2c5282' }}
        >
          Weight Loss
        </Button>
        &nbsp;
        <Button
          colorScheme={selectedGoal === 'Muscle gain' ? 'teal' : 'blue'}
          onClick={() => handleGoalSetting('Muscle gain')}
          mr="2"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: selectedGoal === 'Muscle gain' ? '#319795' : '#3182CE',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          _hover={{ backgroundColor: selectedGoal === 'Muscle gain' ? '#2C7A7B' : '#2c5282' }}
        >
          Muscle Gain
        </Button>
        &nbsp;
        <Button
          colorScheme={selectedGoal === 'Overall health improvement' ? 'teal' : 'blue'}
          onClick={() => handleGoalSetting('Overall health improvement')}
          mr="2"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: selectedGoal === 'Overall health improvement' ? '#319795' : '#3182CE',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          _hover={{ backgroundColor: selectedGoal === 'Overall health improvement' ? '#2C7A7B' : '#2c5282' }}
        >
          Overall Health Improvement
        </Button>
        <br/>
        <br/>
        <hr/>
        <Heading as="h2" size="lg" mt="4" mb="4" sx={{paddingBottom:'20px'}}>Meal Planning</Heading>
        <Button
          colorScheme="green"
          onClick={generateMealPlan}
          mb="4"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#38A169',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          _hover={{ backgroundColor: '#2F855A' }}
        >
          Generate Meal Plan
        </Button>
        <ul>
          {mealPlan.map((item, index) => (
            <li key={index}>
              <strong>{item.day}</strong>: Breakfast - {item.breakfast}, Lunch - {item.lunch}, Dinner - {item.dinner}
            </li>
          ))}
        </ul>
        <br/>
        <Button
          colorScheme="teal"
          onClick={saveProfile}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#319795',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          _hover={{ backgroundColor: '#2C7A7B' }}
        >
          Save Profile
        </Button>
        {errorMessage && (
          <Text color="red" mt="4">{errorMessage}</Text>
        )}
      </Box>
      <br/>
      <br/>
      <Footer />
    </>
  );
};

export default DietFeature;
