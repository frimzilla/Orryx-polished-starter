import React from 'react';
import { SafeAreaView, View, Text, Pressable, StatusBar } from 'react-native';
import theme from './theme';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.xl,
          padding: 24,
          width: '100%',
          maxWidth: 420,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 3 },
          elevation: 4
        }}>
          <Text style={{
            color: theme.colors.primary,
            fontSize: theme.type.h1,
            fontWeight: '700',
            marginBottom: 8
          }}>Orryx</Text>
          <Text style={{ color: theme.colors.muted, fontSize: theme.type.body, marginBottom: 20 }}>
            Rapid internal APK builds via Expo EAS. Starter screen with a minimal design system.
          </Text>

          <Pressable
            onPress={() => setCount(c => c + 1)}
            style={({ pressed }) => ({
              backgroundColor: pressed ? theme.colors.accentDim : theme.colors.accent,
              borderRadius: theme.radius.lg,
              paddingVertical: 12, paddingHorizontal: 16,
              alignItems: 'center'
            })}
          >
            <Text style={{ color: 'white', fontSize: theme.type.body, fontWeight: '600' }}>
              Tap me: {count}
            </Text>
          </Pressable>

          <View style={{ height: 16 }} />
          <Text style={{ color: theme.colors.muted, fontSize: theme.type.small, textAlign: 'center' }}>
            Background {theme.colors.background} • Surface {theme.colors.surface}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
