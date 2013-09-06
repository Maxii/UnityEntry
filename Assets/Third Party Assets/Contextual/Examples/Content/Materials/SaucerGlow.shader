Shader "Custom/SaucerGlow"
{
	Properties
	{
		_MainTex ("Base (RGB)", 2D) = "white" {}
		_Color ("Color (RGB) Trans (A)", Color) = (1,1,1,1)
		_Speed ("Glow Speed", float) = 0.5
	}
	
	SubShader
	{
		Tags { "RenderType"="Transparent" "IgnoreProjector"="True" "Queue"="Transparent" }
		LOD 100
		
		ZWrite Off
		Lighting Off
		Blend One One

		Pass
		{
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			
			#include "UnityCG.cginc"
			
			struct appdata_t
			{
				float4 vertex : POSITION;
				float2 texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : POSITION;
				float2 texcoord : TEXCOORD0;
			};
			
			uniform float4 _MainTex_ST;
			uniform sampler2D _MainTex;
			uniform float4 _Color;
			uniform float _Speed;
	
			v2f vert(appdata_t v)
			{
				v2f o;
				o.vertex = mul(UNITY_MATRIX_MVP, v.vertex);
				float2 tx = TRANSFORM_TEX(v.texcoord, _MainTex);
				tx.x += _Speed * _Time.y;
				o.texcoord = tx;
				
				return o;
			}
			
			half4 frag(v2f i) : COLOR
			{
				half4 c = tex2D(_MainTex, i.texcoord);
				c.rgb *= _Color.rgb;
				c.a = 1f;
				return c;
			}
	
			ENDCG
		}
	}
	
	FallBack "Diffuse"
}

