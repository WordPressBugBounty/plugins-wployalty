<?php
/**
 * @author      Wployalty (Alagesan)
 * @license     http://www.gnu.org/licenses/gpl-2.0.html
 * @link        https://www.wployalty.net
 * */

namespace Wlr\App\Controllers\Site;

use Wlr\App\Controllers\Base;
use Wlr\App\Emails\WlrBirthdayEmail;
use Wlr\App\Emails\WlrEarnPointEmail;
use Wlr\App\Emails\WlrEarnRewardEmail;
use Wlr\App\Emails\WlrExpireEmail;
use Wlr\App\Emails\WlrNewLevelEmail;
use Wlr\App\Emails\WlrPointExpireEmail;

defined( 'ABSPATH' ) or die;

class LoyaltyMail extends Base {
	function initNotification() {
		if ( apply_filters( 'wlr_enable_new_email_workflow', \Wlr\App\Helpers\Base::isNewLoyaltyEmail() ) ) {
			add_filter( 'woocommerce_email_classes', [ $this, 'addEmailClass' ] );
		} else {
			if ( class_exists( '\WPLoyalty\Wordpress' ) ) {
				$wordpress = new \WPLoyalty\Wordpress();
				if ( self::$woocommerce->isMethodExists( $wordpress, 'initHook' ) ) {
					$wordpress->initHook();
				}
			}
		}
	}

	function addEmailClass( $emails ) {
		require_once plugin_dir_path( WC_PLUGIN_FILE ) . 'includes/emails/class-wc-email.php';
		if ( class_exists( 'Wlr\App\Emails\WlrEarnPointEmail' ) ) {
			$emails['WlrEarnPointEmail'] = new WlrEarnPointEmail();
		}
		if ( class_exists( 'Wlr\App\Emails\WlrEarnRewardEmail' ) ) {
			$emails['WlrEarnRewardEmail'] = new WlrEarnRewardEmail();
		}
		if ( class_exists( 'Wlr\App\Emails\WlrExpireEmail' ) ) {
			$emails['WlrExpireEmail'] = new WlrExpireEmail();
		}
		if ( class_exists( 'Wlr\App\Emails\WlrBirthdayEmail' ) ) {
			$emails['WlrBirthdayEmail'] = new WlrBirthdayEmail();
		}

		if ( class_exists( 'Wlr\App\Emails\WlrNewLevelEmail' ) ) {
			$emails['WlrNewLevelEmail'] = new WlrNewLevelEmail();
		}

		if ( class_exists( 'Wlr\App\Emails\WlrPointExpireEmail' ) ) {
			$emails['WlrPointExpireEmail'] = new WlrPointExpireEmail();
		}

		return $emails;
	}
}