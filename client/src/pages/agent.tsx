import { useList } from '@pankod/refine-core';
import { Box, Typography } from '@pankod/refine-mui';
import { AgentCard } from 'components';

const Agents = () => {
  const { data, isLoading, isError } = useList({resource: 'users'});

  const allAgents = data?.data ?? [];

  if (isLoading) return <Typography>Traitement en cours......</Typography>
  if (isError) return <Typography>Un erreur est survenue...</Typography>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} ml={5} color="#11142d">Liste d'agents</Typography>
      <Box
      mt="20px"
      sx={{display: 'flex', flexWrap: 'wrap', gap:'20px',backgroundColor:"#fcfcfc"}}>
        {allAgents.map((agent) => (
          <AgentCard key={agent._id} id={agent._id} name={agent.name} email={agent.email} avatar={agent.avatar} noOfProperties={agent.allProperties.length} />
        ))}
      </Box>
    </Box>
)}

export default Agents;