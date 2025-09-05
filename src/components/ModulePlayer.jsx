
const ModulePlayer = () => {
  return (
    <Container>
        <Title>The title of the video</Title>
        <VideoPlayer controls>
            <source  type="video"/>
        </VideoPlayer>
        <Description>the description of the video</Description>
        <Instructor>Name of the instructor</Instructor>
        <ProgressBar>
            <div></div>
        </ProgressBar>
        <NavButtons>
            <button>Previous</button>
            <button>Next</button>
        </NavButtons>
    </Container>
  )
}

export default ModulePlayer