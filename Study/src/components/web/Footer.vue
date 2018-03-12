<template>
	<div class="footer-container">
		<div class="footer-top">
			<ul class="footer-one">
				<li>友情链接：<a href="#">百度</a><a href="#">搜狐</a><a href="#">新浪中国</a></li>
				<li>咨询热线：010-82783029  010-82784500 </li>
				<li>公司名称：中新金桥信息技术（北京）公司有限</li>
			</ul>
			<ul class="footer-two">
				<li>中文地址：中新金桥 北京（Beijing HQ）</li>
				<li>TEL：+8601-82938420</li>
				<li>Email：sales@kingchannels.com</li>
				<li>address：www.kingchannels.com</li>
			</ul>
			<ul class="footer-three">
				<li>Chinese address：KingChannels LLC</li>
				<li>TEL：+1 425-614-9123</li>
				<li>Email：usasales@kingchannels.com</li>
				<li>Address：12613 SE 4th PL Bellevue WA 98005</li>
			</ul>
		</div>
		<div class="footer-bottom">
			<ul class="footer-link">
				<li>
					<div class="link-one">
						<img src="/static/image/downicon1.png" alt="">
						<div>
							<p>网络警察</p>
							<p>报警平台</p>
						</div>
						
					</div>

					
				</li>
				<li>
					<div class="link-one">
						<img src="/static/image/downicon2.png" alt="">
						<div>
							<p>中国教育部教育</p>
							<p>涉外监管信息网</p>
						</div>
						
					</div>

					
				</li>
				<li>
					<div class="link-one">
						<img src="/static/image/downicon3.png" alt="">
						<div>
							<p>经营性网站</p>
							<p>备案信息</p>
						</div>
						
					</div>

					
				</li>
				<li>
					<div class="link-one">
						<img src="/static/image/downicon4.png" alt="">
						<div>
							<p>不良信息</p>
							<p>举报中心</p>
						</div>
						
					</div>
					

					
				</li>
				<li>
					<div class="link-one">
						<img src="/static/image/downicon5.png" alt="">
						<div>
							<p>中国文明网</p>
							<p>传播文明</p>
						</div>
						
					</div>

					
				</li>
			</ul>
			<p>Copyright &copy;2013-2017 某某网 沪ICP备00000000号-0 某某工商 安全实名验证 信用网站</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>

<style lang="less">
		// @media screen and (min-width: 1220px) {
			.footer-container{
				width: 1220px;
				margin: 0 auto;
				height: 190px;
				padding-top: 10px;
				color: #fff;
				font-size: 12px;
				.footer-top{
					overflow: hidden;
				}
				.footer-one{
					float: left;
					width: 322px;
					padding-left: 10px;
					>li{
						line-height: 18px;
						>a{
							color: #fff;
							position: relative;
							padding: 0 12px;
							&:after{
								content: '';
								display: inline-block;
								position: absolute;
								left: 0;
								top: 0;
								height: 100%;
								width: 1px;
								background-color: #fff;
							}

							&:first-child{
								&:after{
									content: '';
									width: 0;
								}
							}

						}
					}
				}
				.footer-two{
					float: left;
					width: 451px;
					padding-left: 10px;
					>li{
						line-height: 18px;
					}
				}
				.footer-three{
					float: left;
					width: 414px;
					padding-left: 10px;
					>li{
						line-height: 18px;
					}
				}
				.footer-bottom{
					text-align: center;
				}
				.footer-link{
					font-size: 14px;
					text-align: center;
					padding-top: 17px;
					padding-bottom: 24px;
					>li{
						display: inline-block;					}
				}
				.link-one{
					overflow: hidden;
					img{
						float: left;
					}
					>div{
						float: left;
						margin: 0 14px;
						p{
							text-align: left;
							
						}
					}
				}
			}
		// }
</style>