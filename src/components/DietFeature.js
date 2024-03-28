import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  Text,
  Input,
  Heading
} from '@chakra-ui/react';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import Footer from './Footer';

const DietFeature = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('users')));
  const [profile, setProfile] = useState({
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryPreferences: '',
    healthGoals: '',
    name: user.name,
    email: user.email,
  });
  const [profiles, setProfiles] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState('');
  const [mealPlan, setMealPlan] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [addBtn, setAddBtn] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleGoalSetting = (goal) => {
    setSelectedGoal(goal);
    setProfile({ ...profile, healthGoals: goal });
  };

  const generateMealPlan = () => {
    const generatedPlan = [
      { day: 'Monday', breakfast: 'Oatmeal', lunch: 'Salad', dinner: 'Grilled Chicken' },
      { day: 'Tuesday', breakfast: 'Smoothie', lunch: 'Quinoa Bowl', dinner: 'Fish Tacos' },
      { day: 'Wednesday', breakfast: 'Eggs', lunch: 'Grilled Vegetables', dinner: 'Salmon' },
      { day: 'Thursday', breakfast: 'Yogurt', lunch: 'Turkey Sandwich', dinner: 'Vegetable Stir-fry' },
      { day: 'Friday', breakfast: 'Pancakes', lunch: 'Bean Burrito', dinner: 'Steak' },
    ];
    setMealPlan(generatedPlan);
  };


  const saveProfile = () => {
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

    const existingProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    existingProfiles.push(profile);
    localStorage.setItem('profiles', JSON.stringify(existingProfiles));

    Swal.fire({
      icon: 'success',
      title: 'Profile saved successfully!',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.reload();
    });

    setErrorMessage('');
  };

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(storedProfiles);
  }, []);

  const handleAddProfile = () => {
    setAddBtn(false);
  }


  return (
    <>
      <Navbar />
      {(addBtn) ? (
        <>
          <Box maxW="1400px" mx="auto" mt="8" p="4" textAlign="center" className="container">
            <h1 className="text-teal-500 text-2xl mb-6">Your Previous Diet Profile</h1>
            <hr />
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.2rem' }}>
                <thead style={{ backgroundColor: '#008080', color: 'white', fontWeight: 'bold' }}>
                  <tr>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Name</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Email</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Age</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Weight</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Height</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Activity Level</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Dietary Preferences</th>
                    <th style={{ padding: '16px', textAlign: 'center' }}>Health Goals</th>
                  </tr>
                </thead>
                <tbody>
                  {profiles.map((profile, index) => (
                    <tr key={index}>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{profile.name}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{profile.email}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{profile.age}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{profile.weight}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{profile.height}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{profile.activityLevel}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{profile.dietaryPreferences}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{profile.healthGoals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
            <Button
              colorScheme="teal"
              onClick={handleAddProfile}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#319795',
                color: 'white',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'background-color 0.3s',
              }}
              _hover={{ backgroundColor: '#2C7A7B' }}
            >
              Add New Profile
            </Button>
          </Box>
          <br />
          <hr />
        </>) : (
        <>
          <Box maxW="800px" mx="auto" mt="8" p="4" textAlign="center">
            <Heading as="h1" size="lg" mb="4">Diet Feature Profile</Heading>
            <FormControl mb="4">
              <Text sx={{ fontSize: 18, fontWeight: 'bold', }}>Age</Text>
              <Input type="number" name="age" value={profile.age} onChange={handleChange} />
            </FormControl>
            <FormControl mb="4">
              <Text sx={{ fontSize: 18, fontWeight: 'bold', }}>Weight</Text>
              <Input type="number" name="weight" value={profile.weight} onChange={handleChange} />
            </FormControl>
            <FormControl mb="4">
              <Text sx={{ fontSize: 18, fontWeight: 'bold', }}>Height</Text>
              <Input type="number" name="height" value={profile.height} onChange={handleChange} />
            </FormControl>
            <FormControl mb="4">
              <Text sx={{ fontSize: 18, fontWeight: 'bold', }}>Activity Level</Text>
              <Input type="text" name="activityLevel" value={profile.activityLevel} onChange={handleChange} />
            </FormControl>
            <FormControl mb="4">
              <Text sx={{ fontSize: 18, fontWeight: 'bold', }}>Dietary Preferences</Text>
              <Input type="text" name="dietaryPreferences" value={profile.dietaryPreferences} onChange={handleChange} sx={{ width: '500px', height: '20px' }} />
            </FormControl>
            <br />
            <hr />
            <Heading as="h2" size="lg" mb="4" sx={{ paddingBottom: '20px' }}>Goal Setting</Heading>
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
            <br />
            <br />
            <hr />
            <Heading as="h2" size="lg" mt="4" mb="4" sx={{ paddingBottom: '20px' }}>Meal Planning</Heading>
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
            <br />
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
        </>
      )}
      <br />
      <br />
      <Footer />
    </>
  );
};

export default DietFeature;
