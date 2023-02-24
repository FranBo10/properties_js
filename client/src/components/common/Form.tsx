import { Box, Typography, FormControl, FormGroup, FormControlLabel, Checkbox, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button} from '@pankod/refine-mui'
import { useState } from 'react'
import {FormProps} from 'interfaces/common';
import CustomButton from './CustomButton';

const equipmentOptions = [
  { label: "TV", value: "tv" },
  { label: "Wi-Fi", value: "wifi" },
  { label: "Cuisine", value: "kitchen" },
  { label: "Machine à laver", value: "washingMachine" },
  { label: "Climatisation", value: "washingMachine" },
  { label: "Chauffage", value: "washingMachine" },
];

const facilityOptions = [
  { label: "Aparcamiento", value: "parking" },
  { label: "Piscina", value: "pool" },
  { label: "Gimnasio", value: "gym" },
  { label: "Ascensor", value: "elevator" },
];

const Form = ({ type, register, formLoading, handleSubmit, handleImageChange, onFinishHandler, propertyImage} : FormProps) => {
  
  const [descriptionPlaceholder, setDescriptionPlaceholder] = useState<string>('Décrivez la propriété');
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const handleEquipmentChange = (event: React.ChangeEvent<{ value: string }>) => {
    const value = event.target.value as string;
    if (selectedEquipments.includes(value)) {
      setSelectedEquipments(selectedEquipments.filter((val) => val !== value));
    } else {
      setSelectedEquipments([...selectedEquipments, value]);
    }
  };
  
  const handleFacilityChange = (event: React.ChangeEvent<{ value: string }>) => {
    const value = event.target.value as string;
    if (selectedFacilities.includes(value)) {
      setSelectedFacilities(selectedFacilities.filter((val) => val !== value));
    } else {
      setSelectedFacilities([...selectedFacilities, value]);
    }
  };

  const handleDescriptionFocus = () => {
    setDescriptionPlaceholder('');
  };

  const handleDescriptionBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (event.target.value === '') {
      setDescriptionPlaceholder('Décrivez la propriété');
    }
  }
  
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} ml={5} color="#11142d">{type} propriété</Typography>
      <Box
      mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
      <form 
      style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}
      onSubmit={handleSubmit(onFinishHandler)}>
        <FormControl>
          <FormHelperText
          sx={{
            fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'
          }}
          >Titre de l'annonce :</FormHelperText>
            <TextField
            fullWidth
            required
            id="outlined-basic"
            color="info"
            variant='outlined'
            {...register('title', {required: true})}
            />          
        </FormControl>
        <FormControl>
          <FormHelperText
          sx={{
            fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'
          }}
          >Description :</FormHelperText>
            <TextareaAutosize
            minRows={5}
            maxlength={1000}
            required
            placeholder={descriptionPlaceholder}
            color="info"
            style={{ width: '100%', background: 'transparent', fontSize: '12px', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191'}}
            {...register('description', {required: true})}
            onFocus={handleDescriptionFocus}
            onBlur={handleDescriptionBlur}
           
            />          
        </FormControl>
        <Stack direction="row" gap={4}>

        <FormControl>
            <FormHelperText
            sx={{
              fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'
            }}
            >Surface :</FormHelperText>
              <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              type="number"
              value="m2"
              variant='outlined'
              {...register('superficie', {required: true})}
              />          
          </FormControl>

          <FormControl>
            <FormHelperText
            sx={{
              fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'
            }}
            >Chambres :</FormHelperText>
              <TextField
              fullWidth
              required
              id="outlined-basic"
              
              color="info"
              type="number"
              variant='outlined'
              {...register('bedrooms', {required: true})}
              />          
          </FormControl>
          
          <FormControl>
            <FormHelperText
            sx={{
              fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'
            }}
            >Salles de bain :</FormHelperText>
              <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              type="number"
              variant='outlined'
              {...register('bathrooms', {required: true})}
              />          
            </FormControl>

            <FormControl>
            <FormHelperText
            sx={{
              fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'
            }}
            >WC :</FormHelperText>
              <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              type="number"
              variant='outlined'
              {...register('wc', {required: true})}
              />          
            </FormControl>

        </Stack>  
        <Stack direction="row" gap={4} justifyContent="space-between">
          <FormControl component="fieldset" sx={{ marginBottom: "20px", fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
              Equipamiento
            </Typography>
          <FormGroup>
            {equipmentOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={selectedEquipments.includes(option.value)}
                    onChange={handleEquipmentChange}
                    value={option.value}
                  />
                }
                label={option.label}
              />
            ))}
            </FormGroup>
            <FormHelperText>Selecciona los equipamientos disponibles</FormHelperText>
          </FormControl>

          <FormControl component="fieldset" sx={{ marginBottom: "20px", fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
              Servicios
            </Typography>
            <FormGroup>
            {facilityOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={selectedFacilities.includes(option.value)}
                    onChange={handleFacilityChange}
                    value={option.value}
                  />
                }
                label={option.label}
              />
              ))}
            </FormGroup>
            <FormHelperText>Selecciona los servicios disponibles</FormHelperText>
          </FormControl> 
        </Stack>   
          
        <Stack direction="row" gap={4}>
          <FormControl
          sx={{flex:1}}>
            <FormHelperText
            sx={{ fontWeight: 500, margin: '10px 0', fontSize:'16px', color: '#11142d' }}>
              Choisisez le type de propriété :
            </FormHelperText>
            <Select
            variant='outlined'
            color='info'
            displayEmpty
            required
            inputProps={{ 'aria-label': 'Without label'}}
            defaultValue= "appartement"
            {...register('propertyType', {required: true})}>
              <MenuItem value="appartement">Appartement</MenuItem>
              <MenuItem value="maison">Maison</MenuItem>
              <MenuItem value="chalet">Chalet</MenuItem>
              <MenuItem value="villa">Villa</MenuItem>
              <MenuItem value="Studio">Studio</MenuItem>
              <MenuItem value="chambre">Chambre</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
          <FormHelperText
          sx={{
            fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'
          }}
          >Prix :</FormHelperText>
            <TextField
            fullWidth
            required
            id="outlined-basic"
            color="info"
            type="number"
            variant='outlined'
            {...register('price', {required: true})}
            />          
        </FormControl>
        </Stack>
        <FormControl>
          <FormHelperText
          sx={{
            fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'
          }}
          >Localisation :</FormHelperText>
            <TextField
            fullWidth
            required
            id="outlined-basic"
            color="info"
            variant='outlined'
            {...register('location', {required: true})}
            />          
        </FormControl>
        <Stack
        direction="column" gap={1} justifyContent="center" mb={2}>
          <Stack
          direction="row"
          gap={2}>
            <Typography
            color='#11142d' fontSize={16} fontWeight={500} my="10px">Photo de la propriété :</Typography>
            <Button component="label"
            sx={{ width: 'fit-content', color: '#2ed480', textTransform: 'capitalize', fontSize: 16}}>Upload *
            <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              // @ts-ignore
              handleImageChange(e.target.files[0])
            }}/>
            </Button>
          </Stack>
          <Typography
          fontSize={14}
          color="#808191" sx={{wordBreak: 'break-all'}}>{propertyImage?.name}</Typography>
        </Stack>
        <CustomButton 
        type="submit"
        title={formLoading ? 'En traitement...' : 'Enregistrer'}
        backgroundColor="#475be8"
        color="#fcfcfc"
        />
      </form>
      </Box>
    </Box>
  )
}


export default Form