<template>
  <Container align="start">
    <Row gap="s" wrap>
      <Button variant="solid" color="success">
        Button 1
      </Button>
      <Button variant="text">Button 2</Button>
      <Button rounded>Button 3</Button>
      <Button color="info">Button 4</Button>

      <Button variant="solid" :color="customColor" small>
        Button 5
      </Button>
    </Row>

    <Row gap="s" wrap>
      <Button color="success">
        Button 6
        <Icon name="thumb_up" fill small />
      </Button>
      <Button variant="solid" square color="danger">
        <Icon name="favorite" large fill />
      </Button>

      <Button variant="solid" color="info" disabled>
        Disabled
      </Button>

      <Button color="info" small variant="text" @click="myAsyncSubmit">Async 1</Button>
      <Button variant="solid" color="info" @click="myAsyncSubmit">Async 2</Button>
    </Row>
  </Container>
</template>
<script lang="ts" setup>
import { Button, Container, Icon, parseColor, Row } from '../..'

const customColor = parseColor('#ff8888')

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 3000))
}
</script>
