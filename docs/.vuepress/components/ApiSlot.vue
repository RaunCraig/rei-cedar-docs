<template>
  <div>
    <p>Find more information about using Slots in the article, <cdr-link :href="$withBase('/getting-started/as-a-developer/?active-link=add-content-via-slots')">Getting Started as a Developer</cdr-link></p>
    <div class="api-slot" v-for="(apiSlot, index) in this.$slots.default" :key="apiSlot.text">
      <cdr-row
        gutter="none"
      >
        <cdr-col
          span="12"
        >
          <div>
            <p :aria-labelledby="'slotName' + index" class="slot-name">{{ apiSlot.name }}</p>
            <p :id="'slotName' + index" class="slot-label">name </p>
          </div>
        </cdr-col>
        <cdr-col
          span="12"
        >
          <p aria-label="slot description" class="slot-description">
            {{ apiSlot.description }}
          </p>
        </cdr-col>
      </cdr-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApiEvent',
  };
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .api-slot {
    background-color: $clean-slate;
    border: 1px solid $partly-cloudy;
    border-radius: 4px;
    padding: $space-half-x;

    .slot-name {
      color: $quick-fixe;
      font-size: 14px;
      margin-bottom: 0px;
    }
    
    .slot-type {
      color: $dehydrated-lemon;
      font-size: 14px;
      margin-bottom: 0px;
    }

    .slot-label {
      color: $coal-train;
      font-size: 9px;
    }

    .prop-description {
      font-size: 14px;
    }

    & + & {
      margin-top: $space-1-x;
    }
  }
</style>